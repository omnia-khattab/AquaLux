'use client'

import { cn } from '@/lib/utils'
import { SlidersHorizontal, X } from 'lucide-react'

export interface FilterState {
  category: string[]
  installationType: string[]
  controlType: string[]
  priceRange: [number, number]
}

interface SidebarFilterProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  isOpen: boolean
  onClose: () => void
}

const filterOptions = {
  category: [
    { value: 'pool', label: 'Pool Lights' },
    { value: 'fountain', label: 'Fountain Lights' },
  ],
  installationType: [
    { value: 'surface', label: 'Surface Mount' },
    { value: 'niche', label: 'Niche/Recessed' },
    { value: 'floating', label: 'Floating' },
  ],
  controlType: [
    { value: 'app', label: 'App Control' },
    { value: 'remote', label: 'Remote Control' },
    { value: 'static', label: 'Static/Manual' },
  ],
}

export function SidebarFilter({ filters, onFilterChange, isOpen, onClose }: SidebarFilterProps) {
  const toggleFilter = (key: keyof Omit<FilterState, 'priceRange'>, value: string) => {
    const current = filters[key] as string[]
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onFilterChange({ ...filters, [key]: updated })
  }

  const clearAllFilters = () => {
    onFilterChange({
      category: [],
      installationType: [],
      controlType: [],
      priceRange: [0, 1000],
    })
  }

  const hasActiveFilters =
    filters.category.length > 0 ||
    filters.installationType.length > 0 ||
    filters.controlType.length > 0

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 z-50 lg:z-auto h-full lg:h-auto w-80 lg:w-64 xl:w-72',
          'bg-card lg:bg-transparent border-r lg:border-0 border-border',
          'transform transition-transform duration-300 lg:transform-none',
          'overflow-y-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="p-6 lg:p-0 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-primary hover:underline"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Category
            </h3>
            <div className="space-y-2">
              {filterOptions.category.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={cn(
                      'w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200',
                      filters.category.includes(option.value)
                        ? 'bg-primary border-primary'
                        : 'border-border group-hover:border-primary/50'
                    )}
                  >
                    {filters.category.includes(option.value) && (
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-sm transition-colors',
                      filters.category.includes(option.value)
                        ? 'text-foreground'
                        : 'text-muted-foreground group-hover:text-foreground'
                    )}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Installation Type Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Installation Type
            </h3>
            <div className="space-y-2">
              {filterOptions.installationType.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={cn(
                      'w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200',
                      filters.installationType.includes(option.value)
                        ? 'bg-primary border-primary'
                        : 'border-border group-hover:border-primary/50'
                    )}
                    onClick={() => toggleFilter('installationType', option.value)}
                  >
                    {filters.installationType.includes(option.value) && (
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-sm transition-colors',
                      filters.installationType.includes(option.value)
                        ? 'text-foreground'
                        : 'text-muted-foreground group-hover:text-foreground'
                    )}
                    onClick={() => toggleFilter('installationType', option.value)}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Control Type Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Control Type
            </h3>
            <div className="space-y-2">
              {filterOptions.controlType.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={cn(
                      'w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200',
                      filters.controlType.includes(option.value)
                        ? 'bg-primary border-primary'
                        : 'border-border group-hover:border-primary/50'
                    )}
                    onClick={() => toggleFilter('controlType', option.value)}
                  >
                    {filters.controlType.includes(option.value) && (
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-sm transition-colors',
                      filters.controlType.includes(option.value)
                        ? 'text-foreground'
                        : 'text-muted-foreground group-hover:text-foreground'
                    )}
                    onClick={() => toggleFilter('controlType', option.value)}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Price Range
            </h3>
            <div className="px-1">
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    priceRange: [0, Number(e.target.value)],
                  })
                }
                className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>$0</span>
                <span className="text-primary font-medium">${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
