'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { NeonButton } from '@/components/neon-button'
import { Sparkles, Palette, Zap } from 'lucide-react'

const colorPresets = [
  { name: 'Ocean Blue', color: '#00D4FF', hue: 195 },
  { name: 'Electric Cyan', color: '#00FFFF', hue: 180 },
  { name: 'Royal Purple', color: '#8B5CF6', hue: 265 },
  { name: 'Magenta', color: '#FF00FF', hue: 300 },
  { name: 'Sunset Orange', color: '#FF6B35', hue: 15 },
  { name: 'Emerald Green', color: '#10B981', hue: 155 },
  { name: 'Warm White', color: '#FFE4B5', hue: 36 },
  { name: 'Cool White', color: '#E0F2FE', hue: 200 },
]

const scenes = [
  { id: 'pool', label: 'Pool', icon: Sparkles },
  { id: 'fountain', label: 'Fountain', icon: Zap },
]

export function InteractiveVisualizer() {
  const [selectedColor, setSelectedColor] = useState(colorPresets[0])
  const [activeScene, setActiveScene] = useState('pool')
  const [intensity, setIntensity] = useState(80)

  // Calculate CSS filter based on hue rotation
  const getFilter = () => {
    const baseHue = 195 // Base hue of the pool image (blue)
    const hueRotation = selectedColor.hue - baseHue
    const saturation = intensity + 20
    const brightness = 100 + (intensity - 50) * 0.5
    
    return `hue-rotate(${hueRotation}deg) saturate(${saturation}%) brightness(${brightness}%)`
  }

  return (
    <section id="visualizer" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Palette className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Experience the
            <span className="text-primary"> Color Possibilities</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg text-pretty">
            See how our LED lighting transforms any aquatic space. 
            Select a color to preview the effect in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Scene Selector */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Scene Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {scenes.map((scene) => (
                  <button
                    key={scene.id}
                    onClick={() => setActiveScene(scene.id)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300',
                      activeScene === scene.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    )}
                  >
                    <scene.icon className="w-4 h-4" />
                    <span className="font-medium">{scene.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Color Selection
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {colorPresets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => setSelectedColor(preset)}
                    className={cn(
                      'group relative w-full aspect-square rounded-xl transition-all duration-300',
                      selectedColor.name === preset.name
                        ? 'ring-2 ring-offset-2 ring-offset-background ring-primary scale-105'
                        : 'hover:scale-105'
                    )}
                    style={{ backgroundColor: preset.color }}
                    title={preset.name}
                  >
                    <span className="sr-only">{preset.name}</span>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-foreground font-medium">
                {selectedColor.name}
              </p>
            </div>

            {/* Intensity Slider */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Intensity: {intensity}%
              </h3>
              <input
                type="range"
                min="20"
                max="100"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Subtle</span>
                <span>Vibrant</span>
              </div>
            </div>

            {/* CTA */}
            <NeonButton className="w-full" glowColor="cyan">
              Get This Look
            </NeonButton>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass">
              {/* Pool Scene */}
              <div
                className={cn(
                  'absolute inset-0 transition-opacity duration-500',
                  activeScene === 'pool' ? 'opacity-100' : 'opacity-0'
                )}
              >
                {/* Base dark pool image */}
                <Image
                  src="/visualizer/pool-dark.jpg"
                  alt="Pool at night"
                  fill
                  className="object-cover"
                />
                {/* Colored light overlay */}
                <div
                  className="absolute inset-0 mix-blend-screen transition-all duration-500"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 70%, ${selectedColor.color}${Math.round(intensity * 0.6).toString(16).padStart(2, '0')}, transparent 70%)`,
                  }}
                />
                {/* Additional glow effects */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `linear-gradient(to top, ${selectedColor.color}20, transparent 50%)`,
                  }}
                />
              </div>

              {/* Fountain Scene */}
              <div
                className={cn(
                  'absolute inset-0 transition-opacity duration-500',
                  activeScene === 'fountain' ? 'opacity-100' : 'opacity-0'
                )}
              >
                <Image
                  src="/visualizer/fountain-dark.jpg"
                  alt="Fountain at night"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-screen transition-all duration-500"
                  style={{
                    background: `radial-gradient(ellipse 60% 80% at 50% 40%, ${selectedColor.color}${Math.round(intensity * 0.7).toString(16).padStart(2, '0')}, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${selectedColor.color}30, transparent 50%)`,
                  }}
                />
              </div>

              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
              
              {/* Scene Label */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg glass text-sm font-medium">
                Live Preview: {activeScene === 'pool' ? 'Luxury Pool' : 'Dynamic Fountain'}
              </div>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {['RGB Color Mixing', 'App Controlled', 'IP68 Waterproof', 'Energy Efficient'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
