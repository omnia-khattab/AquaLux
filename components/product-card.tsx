'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'group relative rounded-xl overflow-hidden transition-all duration-500',
        'glass hover:border-primary/50',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={cn(
            'object-cover transition-transform duration-700',
            isHovered && 'scale-110'
          )}
        />
        
        {/* Quick View Overlay */}
        <div
          className={cn(
            'absolute inset-0 z-10 flex items-center justify-center bg-background/40 backdrop-blur-sm transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Eye className="w-4 h-4" />
            View Details
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category Tag */}
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {product.category}
          </span>
          <span className="text-muted-foreground/50">|</span>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {product.controlType}
          </span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Specs Preview */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{product.specs.lumens} lm</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{product.specs.wattage}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{product.specs.ipRating}</span>
        </div>

        {/* Variant Selector */}
        <div className="flex flex-wrap gap-1.5">
          {product.variants.slice(0, 3).map((variant) => (
            <button
              key={variant.id}
              onClick={(e) => {
                e.preventDefault()
                setSelectedVariant(variant)
              }}
              className={cn(
                'px-2 py-1 text-xs rounded-md border transition-all duration-200',
                selectedVariant.id === variant.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50'
              )}
            >
              {variant.name}
            </button>
          ))}
        </div>

        {/* Price and View Details */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
         

          <Link
            href={`/products/${product.slug}`}
            className={cn(
              'flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              'bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]'
            )}
          >
            <span>View</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
