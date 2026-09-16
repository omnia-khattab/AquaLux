'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SidebarFilter, type FilterState } from '@/components/products/sidebar-filter'
import { ProductGrid } from '@/components/products/product-grid'
import { products } from '@/lib/products'
import { SlidersHorizontal, Grid3X3, LayoutList, Search } from 'lucide-react'

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    installationType: [],
    controlType: [],
    priceRange: [0, 1000],
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured')
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    // Apply category filter
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category))
    }

    // Apply installation type filter
    if (filters.installationType.length > 0) {
      result = result.filter((p) =>
        filters.installationType.includes(p.installationType)
      )
    }

    // Apply control type filter
    if (filters.controlType.length > 0) {
      result = result.filter((p) => filters.controlType.includes(p.controlType))
    }

    // Apply price range filter
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [filters, searchQuery, sortBy])

  const activeFilterCount =
    filters.category.length +
    filters.installationType.length +
    filters.controlType.length +
    (filters.priceRange[1] < 1000 ? 1 : 0)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Shop
                <span className="text-primary"> LED Lighting</span>
              </h1>
              <p className="max-w-2xl mx-auto text-muted-foreground text-pretty">
                Discover our complete range of premium LED lighting solutions for pools and fountains.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
                {activeFilterCount > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-4 py-2.5 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center rounded-lg border border-border overflow-hidden">
                <button className="p-2.5 bg-primary/10 text-primary" aria-label="Grid view">
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button className="p-2.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="List view">
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <SidebarFilter
              filters={filters}
              onFilterChange={setFilters}
              isOpen={isMobileFilterOpen}
              onClose={() => setIsMobileFilterOpen(false)}
            />

            {/* Product Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing{' '}
                  <span className="text-foreground font-medium">
                    {filteredProducts.length}
                  </span>{' '}
                  {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>

                {/* Active Filters */}
                {activeFilterCount > 0 && (
                  <div className="hidden sm:flex items-center gap-2">
                    {filters.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize"
                      >
                        {cat}
                      </span>
                    ))}
                    {filters.controlType.map((ctrl) => (
                      <span
                        key={ctrl}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium capitalize"
                      >
                        {ctrl}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
