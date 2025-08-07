import type { Product } from './products'

export interface Cart extends Product {
  quantity: number
}
