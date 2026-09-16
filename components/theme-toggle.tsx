'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/theme-context'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button
        className={cn(
          'relative p-2 rounded-lg hover:bg-secondary transition-colors',
          className
        )}
        disabled
      >
        <Sun className="w-5 h-5 text-foreground" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative p-2 rounded-lg hover:bg-secondary transition-colors',
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  )
}