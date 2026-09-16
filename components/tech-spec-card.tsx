'use client'

import { Shield, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TechSpecCardProps {
  title: string
  certifications: string[]
  description?: string
}

export function TechSpecCard({ title, certifications, description }: TechSpecCardProps) {
  return (
    <Card className="glass border-border/50">
      <CardContent className="py-6 px-2">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <Badge key={cert} variant="secondary" className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              {cert}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}