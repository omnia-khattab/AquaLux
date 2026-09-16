'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowDown, Play } from 'lucide-react'
import { NeonButton } from '@/components/neon-button'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient if no video */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-neon-blue/10" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground tracking-wide uppercase">
            Premium LED Technology
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="block text-foreground">Illuminate Your</span>
          <span className="block bg-gradient-to-r from-primary via-neon-blue to-accent bg-clip-text text-transparent">
            Aqua World
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty">
          Transform pools and fountains into stunning visual experiences 
          with our cutting-edge RGB LED lighting systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/products">
            <NeonButton size="lg" glowColor="cyan">
              Explore Solutions
            </NeonButton>
          </Link>
          <button className="group flex items-center gap-3 px-6 py-4 rounded-xl glass text-foreground transition-all duration-300 hover:bg-secondary">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/30 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-primary ml-0.5" />
            </span>
            <span className="font-medium">Watch Demo</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '50K+', label: 'Hours LED Lifespan' },
            { value: 'IP68', label: 'Certified Waterproof' },
            { value: '24/7', label: 'Smart Control' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl glass">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a
          href="#visualizer"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  )
}
