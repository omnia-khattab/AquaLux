'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface Variant {
  id: string
  name: string
  price: number
}

interface VariantSelectorProps {
  variants: Variant[]
  selectedVariant: Variant
  onSelect: (variant: Variant) => void
}

export function VariantSelector({ variants, selectedVariant, onSelect }: VariantSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Select Variant
      </h3>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const isSelected = selectedVariant.id === variant.id
          return (
            <button
              key={variant.id}
              onClick={() => onSelect(variant)}
              className={cn(
                'relative flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-300',
                isSelected
                  ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(0,255,255,0.2)]'
                  : 'border-border hover:border-primary/50 bg-card'
              )}
            >
              {/* Check indicator */}
              <div
                className={cn(
                  'flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all',
                  isSelected
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground/30'
                )}
              >
                {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>

              {/* Variant Info */}
              <div className="text-left">
                <span
                  className={cn(
                    'block text-sm font-medium transition-colors',
                    isSelected ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {variant.name}
                </span>
                <span
                  className={cn(
                    'block text-xs transition-colors',
                    isSelected ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  ${variant.price}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
