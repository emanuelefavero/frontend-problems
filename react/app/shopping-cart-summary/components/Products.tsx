'use client'

import type { Product } from '@/app/shopping-cart-summary/types/products'

interface Props {
  products: Product[]
}

export default function Component({ products }: Props) {
  return (
    <>
      <h2 className='text-3xl font-bold'>Products</h2>
      <code>{JSON.stringify(products)}</code>
    </>
  )
}
