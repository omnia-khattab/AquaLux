import Link from 'next/link'
import { Waves, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'Pool Lights', href: '/products?category=pool' },
    { label: 'Fountain Lights', href: '/products?category=fountain' },
    { label: 'Smart Controllers', href: '/products?controlType=app' },
    { label: 'Accessories', href: '/products' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Projects', href: '/#projects' },
    { label: 'Certifications', href: '/#trust' },
    { label: 'Careers', href: '/careers' },
  ],
  support: [
    { label: 'Installation Guide', href: '/support' },
    { label: 'Warranty', href: '/warranty' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact Us', href: '/#contact' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <Waves className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">Aqua</span>
                <span className="text-foreground">Lux</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Transforming aquatic spaces with cutting-edge LED technology. 
              Premium lighting solutions for pools and fountains worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@aqualux.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@aqualux.com
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +1 (800) 555-1234
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Los Angeles, California
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AquaLux LED. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
