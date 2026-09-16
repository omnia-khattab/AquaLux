import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/context/theme-context'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AquaLux LED | Premium Pool & Fountain Lighting',
  description: 'Transform your aquatic spaces with cutting-edge LED technology. Premium pool and fountain lighting solutions for modern luxury.',
  keywords: ['LED lighting', 'pool lights', 'fountain lights', 'RGB lighting', 'underwater lights', 'smart home'],
}

export const viewport = {
  themeColor: '#0A0A1F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
