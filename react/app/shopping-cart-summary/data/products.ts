import type { Product } from '@/app/shopping-cart-summary/types/products'
import { nanoid } from 'nanoid'

export const products: Product[] = [
  {
    id: nanoid(),
    name: 'Cartier Tank',
    price: 3800,
  },
  {
    id: nanoid(),
    name: 'Cartier Santos',
    price: 3800,
  },
  {
    id: nanoid(),
    name: 'Cartier Panthere',
    price: 3800,
  },
]
