import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { NeonButton } from '@/components/neon-button'
import { getFeaturedProducts } from '@/lib/products'

export function FeaturedProducts() {
  const products = getFeaturedProducts()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Best Sellers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-balance">
              Featured
              <span className="text-muted-foreground"> Products</span>
            </h2>
          </div>
          
          <Link href="/products" className="mt-6 md:mt-0">
            <NeonButton variant="outline" size="sm">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </NeonButton>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
