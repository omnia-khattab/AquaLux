import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { InteractiveVisualizer } from '@/components/home/interactive-visualizer'
import { FeaturedProducts } from '@/components/home/featured-products'
import { ProjectShowcase } from '@/components/home/project-showcase'
import { TrustSignals } from '@/components/home/trust-signals'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InteractiveVisualizer />
        <FeaturedProducts />
        <ProjectShowcase />
        <TrustSignals />
      </main>
      <Footer />
    </>
  )
}
