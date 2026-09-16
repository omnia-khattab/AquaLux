'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  productName: string
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden glass group">
        <Image
          src={images[activeIndex]}
          alt={`${productName} - Image ${activeIndex + 1}`}
          fill
          className={cn(
            'object-cover transition-transform duration-500',
            isZoomed && 'scale-150 cursor-zoom-out'
          )}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Zoom Indicator */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 p-2 rounded-lg glass opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-xs">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto p-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'relative shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300',
                index === activeIndex
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'opacity-60 hover:opacity-100'
              )}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
