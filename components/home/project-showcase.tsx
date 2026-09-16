'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { featuredProjects } from '@/lib/products'

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const activeProject = featuredProjects[activeIndex]

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-balance">
              Stunning Projects
              <span className="text-muted-foreground"> Worldwide</span>
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-sm text-muted-foreground">
              {String(activeIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="relative">
          {/* Main Image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden glass">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  'absolute inset-0 transition-all duration-700 ease-out',
                  index === activeIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
              </div>
            ))}

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{activeProject.location}</span>
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold mb-3 text-foreground">
                  {activeProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {activeProject.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-medium">
                  View Project Details
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={cn(
                  'relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden transition-all duration-300',
                  index === activeIndex
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'opacity-50 hover:opacity-100'
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / featuredProjects.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
