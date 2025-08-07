import Cart from './components/Cart'
import Products from './components/Products'
import { products } from './data/products'

export default function Page() {
  return (
    <>
      <h1>Shopping Cart Summary</h1>

      <div className='flex flex-col gap-4'>
        <Products products={products} />
        <Cart />
      </div>
    </>
  )
}
