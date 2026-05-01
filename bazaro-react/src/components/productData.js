export const products = [
  {
    id: 'day-cream',
    name: 'Day Cream SPF 30',
    category: 'Day Cream',
    price: '$24.00',
    image: '/images/p1.webp',
    description:
      'A lightweight day cream with SPF protection, designed to hydrate and protect your skin while keeping it soft and glowing.',
    highlights: ['SPF 30 protection', 'Lightweight formula', 'Suitable for daily use'],
  },
  {
    id: 'under-eye-roll-on',
    name: 'Under Eye Roll On Gel',
    category: 'Eye Care',
    price: '$18.00',
    image: '/images/p2.webp',
    description:
      'A cooling under-eye gel that helps reduce puffiness and refresh tired eyes for a brighter, more awake look.',
    highlights: ['Cooling roller applicator', 'Reduces puffiness', 'Hydrating gel texture'],
  },
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C Glutathione Serum',
    category: 'Serum',
    price: '$32.00',
    image: '/images/p3.webp',
    description:
      'A brightening serum powered by Vitamin C and Glutathione to improve skin tone, radiance, and daily glow.',
    highlights: ['Brightens dull skin', 'Targets uneven tone', 'Fast-absorbing formula'],
  },
]

export const getProductById = (id) => products.find((product) => product.id === id) || products[0]
