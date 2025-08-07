import { products } from '@/app/shopping-cart-summary/data/products'
import Products from './components/Products'

export default function Page() {
  return (
    <>
      <h1>Shopping Cart Summary</h1>

      <Products products={products} />
    </>
  )
}
