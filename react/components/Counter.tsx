'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='mb-2 text-4xl font-bold text-emerald-500'>{count}</div>
      <div className='flex gap-2'>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
          -
        </button>
        <button onClick={() => setCount(0)}>C</button>
      </div>
    </div>
  )
}
