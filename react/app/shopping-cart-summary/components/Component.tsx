'use client'

import { useCounterStore } from '@/app/shopping-cart-summary/store/useCounterStore'

export default function Component() {
  const { count, increment } = useCounterStore()

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </>
  )
}
