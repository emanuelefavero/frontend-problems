'use client'

import { useCartStore } from '@/app/shopping-cart-summary/store/useCartStore'
import type { Product } from '@/app/shopping-cart-summary/types/products'

interface Props {
  products: Product[]
}

export default function Component({ products }: Props) {
  const { addProduct } = useCartStore()

  return (
    <div className='max-w-sm'>
      <h2 className='text-3xl font-bold'>Products</h2>

      {/* Products List */}
      <ul className='mt-2 flex flex-col gap-2'>
        {products.map((product: Product) => (
          <li key={product.id} className='flex items-center justify-between'>
            {/* Product Name */}
            <div>{product.name}</div>

            <div className='flex items-center gap-2'>
              {/* Price */}
              <div className='font-semibold'>${product.price}</div>

              {/* Add to Cart Button */}
              <button
                className='bg-amber-300 text-sm font-medium text-black hover:bg-amber-200'
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
