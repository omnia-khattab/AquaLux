import { Zap, Battery, Shield, Clock, Layers, Palette } from 'lucide-react'

interface Specs {
  wattage: string
  voltage: string
  lumens: string
  ipRating: string
  lifeSpan: string
  material: string
  colorOptions: string[]
}

interface TechnicalSpecsProps {
  specs: Specs
}

const specIcons = {
  wattage: Zap,
  voltage: Battery,
  lumens: Zap,
  ipRating: Shield,
  lifeSpan: Clock,
  material: Layers,
}

const specLabels: Record<string, string> = {
  wattage: 'Power',
  voltage: 'Voltage',
  lumens: 'Brightness',
  ipRating: 'IP Rating',
  lifeSpan: 'Lifespan',
  material: 'Material',
}

export function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  const specEntries = Object.entries(specs).filter(([key]) => key !== 'colorOptions')

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Technical Specifications
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {specEntries.map(([key, value]) => {
          const Icon = specIcons[key as keyof typeof specIcons] || Layers
          return (
            <div
              key={key}
              className="p-4 rounded-xl glass"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {specLabels[key] || key}
                </span>
              </div>
              <p className="text-lg font-semibold text-foreground">
                {value}
              </p>
            </div>
          )
        })}
      </div>

      {/* Color Options */}
      {specs.colorOptions && specs.colorOptions.length > 0 && (
        <div className="p-4 rounded-xl glass">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Color Options
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {specs.colorOptions.map((color) => (
              <span
                key={color}
                className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-foreground"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
