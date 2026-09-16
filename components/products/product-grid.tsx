'use client'

import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/products'
import { PackageSearch } from 'lucide-react'
import { NeonButton } from '../neon-button'

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl glass animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageSearch className="w-16 h-16 text-muted-foreground/30 mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">
          No products found
        </h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-sm">
          Try adjusting your filters or search criteria to find what you are looking for.
        </p>
        <NeonButton variant="outline">Clear Filters</NeonButton>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
