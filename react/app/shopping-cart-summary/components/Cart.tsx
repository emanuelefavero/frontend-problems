'use client'

import { useCartStore } from '@/app/shopping-cart-summary/store/useCartStore'
import type { Cart } from '@/app/shopping-cart-summary/types/cart'

export default function Component() {
  const { cart, total, clearCart, increaseQuantity, decreaseQuantity } =
    useCartStore()

  if (!cart.length) return

  return (
    <div className='max-w-sm'>
      <h2 className='mt-2 text-3xl font-bold'>Cart</h2>

      {/* Clear All Products */}
      <button
        className='mt-2 bg-transparent px-0 py-0 font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400'
        onClick={clearCart}
      >
        Clear all products
      </button>

      {/* Cart Products */}
      <ul className='mt-2 flex flex-col gap-2'>
        {cart.map((product: Cart) => (
          <li key={product.id} className='flex items-center justify-between'>
            {/* Product Name */}
            <div>{product.name}</div>

            <div className='flex items-center gap-2'>
              {/* Price */}
              <div className='font-semibold'>${product.price}</div>

              {/* Quantity Buttons */}
              <div className='flex select-none items-center justify-center gap-2 rounded-full border-2 border-amber-300 px-3 py-0.5'>
                {/* Decrease Button */}
                <button
                  className='text-(--foreground) bg-transparent px-0 py-0 active:scale-95'
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>

                {/* Quantity */}
                <div>{product.quantity}</div>

                {/* Increase Button */}
                <button
                  className='text-(--foreground) bg-transparent px-0 py-0 active:scale-95'
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Line Separator */}
      <hr className='mt-4' />

      {/* Total */}
      <p className='mt-2 flex w-full justify-end text-lg'>
        Total ({cart.length} product{cart.length === 1 ? '' : 's'}):{' '}
        <span className='font-bold'>&nbsp;${total}</span>
      </p>
    </div>
  )
}
