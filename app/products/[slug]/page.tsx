'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { use } from 'react'
import { ChevronLeft, Shield, Download } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NeonButton } from '@/components/neon-button'
import { ImageGallery } from '@/components/products/image-gallery'
import { TechnicalSpecs } from '@/components/products/technical-specs'
import { RelatedProjects } from '@/components/products/related-projects'
import { ProductCard } from '@/components/product-card'
import { getProductBySlug, products } from '@/lib/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Shop
            </Link>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <ImageGallery images={product.images} productName={product.name} />

              {/* Product Info */}
              <div className="space-y-6">
                {/* Badge */}
                {product.badge && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    {product.badge}
                  </span>
                )}

                {/* Category */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="uppercase tracking-wider">{product.category}</span>
                  <span>|</span>
                  <span className="capitalize">{product.controlType} Control</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  {product.name}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {product.description}
                </p>

                {/* Quick Specs */}
                <div className="flex flex-wrap gap-4 py-4 border-y border-border">
                  <div className="text-center">
                    <span className="block text-lg font-bold text-foreground">{product.specs.ipRating}</span>
                    <span className="text-xs text-muted-foreground">IP Rating</span>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <span className="block text-lg font-bold text-foreground">{product.specs.wattage}</span>
                    <span className="text-xs text-muted-foreground">Wattage</span>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <span className="block text-lg font-bold text-foreground">{product.specs.voltage}</span>
                    <span className="text-xs text-muted-foreground">Voltage</span>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <span className="block text-lg font-bold text-foreground">{product.specs.material}</span>
                    <span className="text-xs text-muted-foreground">Material</span>
                  </div>
                </div>

                {/* Download Datasheet */}
                <div className="pt-6">
                  <NeonButton
                    className="w-full"
                    size="lg"
                    glowColor="cyan"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '/data-sheet.pdf'
                      link.download = ''
                      link.click()
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    <span>Download Datasheet (PDF)</span>
                  </NeonButton>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="mt-16">
              <TechnicalSpecs specs={product.specs} />
            </div>

            {/* Related Projects */}
            <RelatedProjects productId={product.id} />

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="py-12">
                <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
