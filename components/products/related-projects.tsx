import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { featuredProjects, getProductById } from '@/lib/products'

interface RelatedProjectsProps {
  productId: string
}

export function RelatedProjects({ productId }: RelatedProjectsProps) {
  // Find projects that used this product
  const relatedProjects = featuredProjects.filter((project) =>
    project.productsUsed.includes(productId)
  )

  if (relatedProjects.length === 0) {
    return null
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Featured In Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {relatedProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl overflow-hidden glass"
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{project.location}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {project.description}
              </p>
              
              {/* Products Used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.productsUsed.slice(0, 3).map((pid) => {
                  const product = getProductById(pid)
                  return product ? (
                    <span
                      key={pid}
                      className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs"
                    >
                      {product.name}
                    </span>
                  ) : null
                })}
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
