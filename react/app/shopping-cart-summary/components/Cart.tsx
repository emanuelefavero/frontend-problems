import type { Product } from '@/app/shopping-cart-summary/types/products'

// TODO move this to zustand
const cartProducts: Product[] = [
  {
    id: '123',
    name: 'Cartier Tank',
    price: 3800,
  },
  {
    id: '456',
    name: 'Cartier Santos',
    price: 3800,
  },
]

export default function Component() {
  return (
    <div className='max-w-sm'>
      <h2 className='mt-2 text-3xl font-bold'>Cart</h2>

      {/* Clear All Products */}
      <button className='mt-2 bg-transparent px-0 py-0 font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400'>
        Clear all products
      </button>

      {/* Cart Products */}
      <ul className='mt-2 flex flex-col gap-2'>
        {cartProducts.map((product: Product) => (
          <li key={product.id} className='flex items-center justify-between'>
            <div>{product.name}</div>
            <div className='flex items-center gap-2'>
              <div className='font-semibold'>${product.price}</div>

              {/* Quantity Buttons */}
              <div className='flex select-none items-center justify-center gap-2 rounded-full border-2 border-amber-300 px-3 py-0.5'>
                <button className='text-(--foreground) bg-transparent px-0 py-0 active:scale-95'>
                  -
                </button>
                <div>1</div>
                <button className='text-(--foreground) bg-transparent px-0 py-0 active:scale-95'>
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
      {/* TODO Calculate total and get cart products length from zustand */}
      <p className='mt-2 flex w-full justify-end text-lg'>
        Total (3 products): <span className='font-bold'>&nbsp;$17000</span>
      </p>
    </div>
  )
}
