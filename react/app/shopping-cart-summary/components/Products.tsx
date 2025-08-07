'use client'

import type { Product } from '@/app/shopping-cart-summary/types/products'

interface Props {
  products: Product[]
}

export default function Component({ products }: Props) {
  return (
    <div className='max-w-sm'>
      <h2 className='text-3xl font-bold'>Products</h2>

      <ul className='mt-2 flex flex-col gap-2'>
        {products.map((product: Product) => (
          <li key={product.id} className='flex items-center justify-between'>
            <div>{product.name}</div>
            <div className='flex items-center gap-2'>
              <div className='font-semibold'>${product.price}</div>
              <button className='bg-amber-300 text-sm font-medium text-black hover:bg-amber-200'>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
