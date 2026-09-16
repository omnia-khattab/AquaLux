import { Shield, Zap, Smartphone, Droplets, Award, Clock } from 'lucide-react'

const trustSignals = [
  {
    icon: Shield,
    title: 'IP68 Certified',
    description: 'Military-grade waterproofing for complete submersion protection up to 3 meters.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'LED technology reduces energy consumption by up to 85% compared to traditional lighting.',
  },
  {
    icon: Smartphone,
    title: 'Smart Home Ready',
    description: 'Seamless integration with Alexa, Google Home, and our dedicated mobile app.',
  },
  {
    icon: Droplets,
    title: 'Marine Grade',
    description: 'Corrosion-resistant materials designed for saltwater and chemical environments.',
  },
  {
    icon: Award,
    title: '5-Year Warranty',
    description: 'Industry-leading warranty with dedicated support and replacement guarantee.',
  },
  {
    icon: Clock,
    title: '50,000+ Hours',
    description: 'Extended LED lifespan ensures years of maintenance-free operation.',
  },
]

export function TrustSignals() {
  return (
    <section id="trust" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Built for
            <span className="text-primary"> Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg text-pretty">
            Our lighting solutions are engineered to the highest standards, 
            combining cutting-edge technology with uncompromising quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl glass transition-all duration-300 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                <signal.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {signal.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {signal.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl glass">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Countries Served' },
              { value: '5000+', label: 'Happy Customers' },
              { value: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
