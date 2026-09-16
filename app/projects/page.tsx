import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    id: '1',
    slug: 'luxury-resort-illumination',
    title: 'Luxury Resort Pool Illumination',
    description: 'Complete underwater lighting system for a 5-star resort featuring RGB color-changing LEDs.',
    image: '/projects/resort-pool.jpg',
    location: 'Maldives',
    completionDate: '2023',
    productsUsed: ['RGB Pool Light Pro', 'Underwater Transformer'],
  },
  {
    id: '2',
    slug: 'modern-villa-lighting',
    title: 'Modern Villa Aquatic Lighting',
    description: 'Custom lighting design for a contemporary villa with synchronized pool and fountain illumination.',
    image: '/projects/modern-villa.jpg',
    location: 'California, USA',
    completionDate: '2023',
    productsUsed: ['LED Pool Light Series', 'Smart Controller'],
  },
  // Add more projects as needed
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of stunning aquatic lighting installations worldwide.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}