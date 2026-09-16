'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/theme-context'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  glowColor?: 'cyan' | 'magenta' | 'blue'
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'primary', size = 'md', glowColor = 'cyan', children, ...props }, ref) => {
    const { theme } = useTheme()

    const glowStyles = {
      cyan: 'hover:shadow-[0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.3)] focus:shadow-[0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.3)]',
      magenta: 'hover:shadow-[0_0_20px_rgba(255,0,255,0.5),0_0_40px_rgba(255,0,255,0.3)] focus:shadow-[0_0_20px_rgba(255,0,255,0.5),0_0_40px_rgba(255,0,255,0.3)]',
      blue: 'hover:shadow-[0_0_20px_rgba(0,100,255,0.5),0_0_40px_rgba(0,100,255,0.3)] focus:shadow-[0_0_20px_rgba(0,100,255,0.5),0_0_40px_rgba(0,100,255,0.3)]',
    }

    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 ease-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
      theme === 'dark' && glowStyles[glowColor]
    )

    const variants = {
      primary: cn(
        'bg-gradient-to-r from-primary to-neon-cyan text-primary-foreground',
        'border border-primary/50',
        'hover:from-primary/90 hover:to-neon-cyan/90'
      ),
      secondary: cn(
        'bg-secondary text-secondary-foreground',
        'border border-border',
        'hover:bg-secondary/80'
      ),
      outline: cn(
        'bg-transparent text-primary',
        'border-2 border-primary',
        'hover:bg-primary/10'
      ),
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs rounded-md',
      md: 'px-6 py-3 text-sm rounded-lg',
      lg: 'px-8 py-4 text-base rounded-xl',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)

NeonButton.displayName = 'NeonButton'

export { NeonButton }
