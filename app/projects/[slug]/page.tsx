'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, MapPin, Calendar, ArrowRight, Download, ExternalLink } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NeonButton } from '@/components/neon-button'
import { ProductCard } from '@/components/product-card'
import { getProductBySlug, products } from '@/lib/products'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

// Mock project data - in a real app, this would come from a database
const projects = [
  {
    id: '1',
    slug: 'luxury-resort-illumination',
    title: 'Luxury Resort Pool Illumination',
    description: 'Complete underwater lighting system for a 5-star resort featuring RGB color-changing LEDs.',
    fullDescription: 'This project involved transforming a luxury resort\'s pool area into a mesmerizing aquatic experience. The challenge was to create a lighting system that could adapt to different events and moods while maintaining energy efficiency and durability in a saltwater environment. Our solution incorporated advanced RGB LEDs with smart controls, allowing for seamless color transitions and programmable lighting sequences.',
    beforeImage: '/projects/resort-before.jpg',
    afterImage: '/projects/resort-after.jpg',
    images: [
      '/projects/resort-1.jpg',
      '/projects/resort-2.jpg',
      '/projects/resort-3.jpg',
      '/projects/resort-4.jpg',
      '/projects/resort-5.jpg',
      '/projects/resort-6.jpg',
    ],
    location: 'Maldives',
    completionDate: '2023',
    type: 'Private Pool',
    lightingModel: 'RGB LED Series Pro',
    challenge: 'The resort required a lighting system that could withstand harsh marine conditions while providing vibrant, customizable illumination for evening events and daytime ambiance.',
    solution: 'We implemented our premium RGB Pool Light Pro series with corrosion-resistant stainless steel housings and IP68 waterproofing. The system includes a central controller for synchronized lighting effects and energy-efficient LED technology.',
    productsUsed: ['RGB Pool Light Pro', 'Underwater Transformer', 'Smart Lighting Controller'],
  },
  {
    id: '2',
    slug: 'modern-villa-lighting',
    title: 'Modern Villa Aquatic Lighting',
    description: 'Custom lighting design for a contemporary villa with synchronized pool and fountain illumination.',
    fullDescription: 'A modern villa project showcasing the integration of pool and fountain lighting with architectural elements.',
    beforeImage: '/projects/villa-before.jpg',
    afterImage: '/projects/villa-after.jpg',
    images: [
      '/projects/villa-1.jpg',
      '/projects/villa-2.jpg',
      '/projects/villa-3.jpg',
      '/projects/villa-4.jpg',
    ],
    location: 'California, USA',
    completionDate: '2023',
    type: 'Private Pool',
    lightingModel: 'LED Pool Light Series',
    challenge: 'Synchronizing pool and fountain lighting with the villa\'s smart home system.',
    solution: 'Custom installation with integrated controls and premium LED fixtures.',
    productsUsed: ['LED Pool Light Series', 'Smart Controller', 'Fountain Light Kit'],
  },
]

function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug)
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params)
  const project = getProjectBySlug(slug)
  const [heroImage, setHeroImage] = useState<'before' | 'after'>('after')

  if (!project) {
    notFound()
  }

  // Get related products
  const relatedProducts = products.filter(product =>
    project.productsUsed.some(used => product.name.includes(used.split(' ')[0]))
  ).slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Hero Section with Before/After Slider */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.completionDate}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="mt-8 space-y-2">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Type:</span>
                    <span className="text-muted-foreground">{project.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Lighting Model:</span>
                    <span className="text-muted-foreground">{project.lightingModel}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Before/After Toggle */}
                <div className="flex justify-center mb-4">
                  <div className="glass p-1 rounded-lg flex">
                    <button
                      onClick={() => setHeroImage('before')}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        heroImage === 'before' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setHeroImage('after')}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        heroImage === 'after' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      After
                    </button>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={heroImage === 'before' ? project.beforeImage : project.afterImage}
                    alt={`${project.title} - ${heroImage}`}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-red-500">The Challenge</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-green-500">Our Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Masonry Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {project.images.map((image, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="relative aspect-square rounded-xl overflow-hidden glass">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get This Look Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get This Look</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the high-quality components that made this installation possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <NeonButton asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </NeonButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}