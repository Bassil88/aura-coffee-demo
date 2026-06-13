export interface Product {
  id: string;
  price: number;
  category: 'Coffee' | 'Tea' | 'Wellness' | 'Equipment';
  image: string;
  name: { en: string; de: string };
  description: { en: string; de: string };
}

export const products: Product[] = [
  {
    id: '1',
    price: 18.00,
    category: 'Coffee',
    image: '/coffee-beans.jpg',
    name: {
      en: 'Ethiopian Yirgacheffe',
      de: 'Äthiopischer Yirgacheffe'
    },
    description: {
      en: 'Light roast with floral notes of jasmine and citrus. Single-origin and ethically sourced.',
      de: 'Helle Röstung mit floralen Noten von Jasmin und Zitrusfrüchten. Single-Origin und ethisch bezogen.'
    }
  },
  {
    id: '2',
    price: 24.00,
    category: 'Tea',
    image: '/matcha-tea.jpg',
    name: {
      en: 'Ceremonial Grade Matcha',
      de: 'Ceremonial Grade Matcha'
    },
    description: {
      en: 'Stone-ground organic green tea from Uji, Japan. Rich in antioxidants and vibrant in color.',
      de: 'Stein-gemahlener Bio-Grüntee aus Uji, Japan. Reich an Antioxidantien und lebendig in der Farbe.'
    }
  },
  {
    id: '3',
    price: 14.00,
    category: 'Wellness',
    image: '/wellness-tea.jpg',
    name: {
      en: 'Midnight Lavender Tea',
      de: 'Mitternachts-Lavendeltee'
    },
    description: {
      en: 'A soothing blend of organic lavender and chamomile for a perfect night\'s sleep.',
      de: 'Eine beruhigende Mischung aus Bio-Lavendel und Kamille für einen perfekten Schlaf.'
    }
  },
  {
    id: '4',
    price: 45.00,
    category: 'Equipment',
    image: '/brewing-kit.jpg',
    name: {
      en: 'Precision Pour-Over Kit',
      de: 'Präzisions-Handfilter-Set'
    },
    description: {
      en: 'Everything you need for the perfect pour-over. Includes glass dripper and paper filters.',
      de: 'Alles, was Sie für den perfekten Handfilter benötigen. Inklusive Glas-Dripper und Papierfilter.'
    }
  },
  {
    id: '5',
    price: 22.00,
    category: 'Coffee',
    image: '/coffee-beans.jpg',
    name: {
      en: 'Aura Signature Blend',
      de: 'Aura Signature Blend'
    },
    description: {
      en: 'Medium-dark roast with chocolatey undertones and a smooth, balanced finish.',
      de: 'Mitteldunkle Röstung mit schokoladigen Untertönen und einem sanften, ausgewogenen Abgang.'
    }
  },
  {
    id: '6',
    price: 19.00,
    category: 'Tea',
    image: '/organic-bundle.jpg',
    name: {
      en: 'Golden Turmeric Chai',
      de: 'Goldener Kurkuma-Chai'
    },
    description: {
      en: 'A warming spice blend with organic turmeric, ginger, and black pepper.',
      de: 'Eine wärmende Gewürzmischung mit Bio-Kurkuma, Ingwer und schwarzem Pfeffer.'
    }
  },
  {
    id: '7',
    price: 32.00,
    category: 'Wellness',
    image: '/organic-bundle.jpg',
    name: {
      en: 'Morning Ritual Bundle',
      de: 'Morgenritual-Bundle'
    },
    description: {
      en: 'A curated selection of our best-selling coffee and wellness teas to start your day.',
      de: 'Eine kuratierte Auswahl unserer meistverkauften Kaffee- und Wellness-Tees für den Start in den Tag.'
    }
  },
  {
    id: '8',
    price: 16.00,
    category: 'Coffee',
    image: '/coffee-cat.jpg',
    name: {
      en: 'Decaf Mountain Water',
      de: 'Entkoffeinierter Bergwasser-Kaffee'
    },
    description: {
      en: 'Premium decaf processed using the natural mountain water method. Full flavor, zero caffeine.',
      de: 'Premium-Entkoffeinierung nach der natürlichen Bergwassermethode. Voller Geschmack, null Koffein.'
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}