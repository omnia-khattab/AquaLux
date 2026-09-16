import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar } from 'lucide-react'

interface Project {
  id: string
  slug: string
  title: string
  description: string
  image: string
  location: string
  completionDate: string
  productsUsed: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="glass border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            {project.location}
            <Calendar className="w-4 h-4 ml-2" />
            {project.completionDate}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.productsUsed.map((product) => (
            <Badge key={product} variant="secondary" className="text-xs">
              {product}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}