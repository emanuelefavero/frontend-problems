'use client'

import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: 'iPhone',
    count: 1,
  },
  {
    id: 1,
    name: 'MacBook',
    count: 3,
  },
  {
    id: 3,
    name: 'AirPods',
    count: 2,
  },
]

export default function Page() {
  const [products, setProducts] = useState(initialProducts)

  const handleIncrease = (productId: number) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          }
        }

        return product
      })
    )
  }

  // Delete item from shopping cart if count is 0 or less

  return (
    <>
      <h1>Remove item from shopping cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncrease(product.id)
              }}
            >
              +
            </button>
            <button onClick={() => handleDecrease(product.id)}>–</button>
          </li>
        ))}
      </ul>
    </>
  )
}
