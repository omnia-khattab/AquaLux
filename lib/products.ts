export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: 'pool' | 'fountain'
  installationType: 'surface' | 'niche' | 'floating'
  controlType: 'remote' | 'app' | 'static'
  images: string[]
  specs: {
    wattage: string
    voltage: string
    lumens: string
    ipRating: string
    lifeSpan: string
    material: string
    colorOptions: string[]
  }
  variants: {
    id: string
    name: string
    price: number
  }[]
  featured: boolean
  badge?: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'AquaGlow Pro RGB',
    slug: 'aquaglow-pro-rgb',
    description: 'Professional-grade underwater LED light with full RGB spectrum control. Perfect for luxury pools requiring dynamic lighting effects.',
    price: 299,
    category: 'pool',
    installationType: 'niche',
    controlType: 'app',
    images: [
      '/products/pool-light-1.jpg',
      '/products/pool-light-1-blue.jpg',
      '/products/pool-light-1-magenta.jpg',
    ],
    specs: {
      wattage: '35W',
      voltage: '12V DC',
      lumens: '3200',
      ipRating: 'IP68',
      lifeSpan: '50,000 hrs',
      material: 'Marine-grade Stainless Steel',
      colorOptions: ['RGB', 'RGBW', 'Warm White'],
    },
    variants: [
      { id: '1-rgb', name: 'RGB Standard', price: 299 },
      { id: '1-rgbw', name: 'RGB+W Premium', price: 349 },
      { id: '1-app', name: 'RGB+App Control', price: 399 },
    ],
    featured: true,
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'FountainBurst Elite',
    slug: 'fountainburst-elite',
    description: 'High-intensity fountain light designed for dramatic water displays. Creates stunning visual effects with precision color mixing.',
    price: 449,
    category: 'fountain',
    installationType: 'surface',
    controlType: 'app',
    images: [
      '/products/fountain-light-1.jpg',
      '/products/fountain-light-1-cyan.jpg',
      '/products/fountain-light-1-warm.jpg',
    ],
    specs: {
      wattage: '54W',
      voltage: '24V DC',
      lumens: '4800',
      ipRating: 'IP68',
      lifeSpan: '60,000 hrs',
      material: 'Brass with Chrome Finish',
      colorOptions: ['RGB', 'RGBW', 'Color Changing'],
    },
    variants: [
      { id: '2-rgb', name: 'RGB Standard', price: 449 },
      { id: '2-rgbw', name: 'RGB+W Premium', price: 529 },
      { id: '2-dmx', name: 'DMX Control Pro', price: 649 },
    ],
    featured: true,
    badge: 'New',
  },
  {
    id: '3',
    name: 'PoolEdge Slim',
    slug: 'pooledge-slim',
    description: 'Ultra-thin profile LED strip for pool edges and waterlines. Seamless integration with modern pool designs.',
    price: 189,
    category: 'pool',
    installationType: 'surface',
    controlType: 'remote',
    images: [
      '/products/pool-edge-1.jpg',
      '/products/pool-edge-1-blue.jpg',
      '/products/pool-edge-1-green.jpg',
    ],
    specs: {
      wattage: '18W/m',
      voltage: '12V DC',
      lumens: '1200/m',
      ipRating: 'IP68',
      lifeSpan: '40,000 hrs',
      material: 'Silicone Encased',
      colorOptions: ['Single Color', 'RGB', 'RGBW'],
    },
    variants: [
      { id: '3-3m', name: '3m Length', price: 189 },
      { id: '3-5m', name: '5m Length', price: 289 },
      { id: '3-10m', name: '10m Length', price: 549 },
    ],
    featured: false,
  },
  {
    id: '4',
    name: 'NightFloat Orb',
    slug: 'nightfloat-orb',
    description: 'Wireless floating LED orb with rechargeable battery. Creates magical ambiance for evening pool parties.',
    price: 129,
    category: 'pool',
    installationType: 'floating',
    controlType: 'remote',
    images: [
      '/products/float-orb-1.jpg',
      '/products/float-orb-1-multi.jpg',
      '/products/float-orb-1-warm.jpg',
    ],
    specs: {
      wattage: '8W',
      voltage: 'Rechargeable',
      lumens: '600',
      ipRating: 'IP67',
      lifeSpan: '30,000 hrs',
      material: 'UV-resistant Polyethylene',
      colorOptions: ['RGB', 'Warm White', 'Color Cycle'],
    },
    variants: [
      { id: '4-sm', name: '20cm Diameter', price: 129 },
      { id: '4-md', name: '35cm Diameter', price: 179 },
      { id: '4-lg', name: '50cm Diameter', price: 249 },
    ],
    featured: true,
  },
  {
    id: '5',
    name: 'JetStream Nozzle Light',
    slug: 'jetstream-nozzle-light',
    description: 'Integrated nozzle and LED unit for fountain jets. Illuminates water streams from within for spectacular effects.',
    price: 379,
    category: 'fountain',
    installationType: 'niche',
    controlType: 'app',
    images: [
      '/products/jet-light-1.jpg',
      '/products/jet-light-1-purple.jpg',
      '/products/jet-light-1-gold.jpg',
    ],
    specs: {
      wattage: '42W',
      voltage: '24V DC',
      lumens: '3600',
      ipRating: 'IP68',
      lifeSpan: '50,000 hrs',
      material: 'Stainless Steel 316',
      colorOptions: ['RGB', 'RGBW', 'DMX Compatible'],
    },
    variants: [
      { id: '5-std', name: 'Standard Flow', price: 379 },
      { id: '5-high', name: 'High Flow', price: 449 },
      { id: '5-dmx', name: 'DMX Integrated', price: 579 },
    ],
    featured: false,
    badge: 'Pro Choice',
  },
  {
    id: '6',
    name: 'MiniSpot Accent',
    slug: 'minispot-accent',
    description: 'Compact spotlight for accent lighting around pools and water features. Perfect for landscaping integration.',
    price: 89,
    category: 'pool',
    installationType: 'surface',
    controlType: 'static',
    images: [
      '/products/mini-spot-1.jpg',
      '/products/mini-spot-1-blue.jpg',
      '/products/mini-spot-1-amber.jpg',
    ],
    specs: {
      wattage: '9W',
      voltage: '12V DC',
      lumens: '800',
      ipRating: 'IP65',
      lifeSpan: '35,000 hrs',
      material: 'Aluminum with Powder Coat',
      colorOptions: ['Warm White', 'Cool White', 'Blue', 'Amber'],
    },
    variants: [
      { id: '6-warm', name: 'Warm White', price: 89 },
      { id: '6-cool', name: 'Cool White', price: 89 },
      { id: '6-rgb', name: 'RGB Version', price: 129 },
    ],
    featured: false,
  },
]

export const featuredProjects = [
  {
    id: '1',
    title: 'The Riviera Estate',
    location: 'Malibu, California',
    description: 'Complete infinity pool transformation with color-synchronized fountain display.',
    image: '/projects/riviera-estate.jpg',
    productsUsed: ['1', '2', '3'],
  },
  {
    id: '2',
    title: 'Azure Bay Resort',
    location: 'Miami Beach, Florida',
    description: 'Resort-wide installation featuring dynamic lighting across multiple water features.',
    image: '/projects/azure-bay.jpg',
    productsUsed: ['2', '5'],
  },
  {
    id: '3',
    title: 'Villa Serena',
    location: 'Santorini, Greece',
    description: 'Seamless integration of LED lighting with traditional Mediterranean architecture.',
    image: '/projects/villa-serena.jpg',
    productsUsed: ['1', '4', '6'],
  },
  {
    id: '4',
    title: 'The Grand Fountain Plaza',
    location: 'Dubai, UAE',
    description: 'Spectacular commercial installation with synchronized music and light shows.',
    image: '/projects/grand-plaza.jpg',
    productsUsed: ['2', '5'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
