'use client'

import { useState } from 'react'
import { useIsFirstRender } from '@/hooks/useIsFirstRender'

export default function UseIsFirstRender() {
  const [count, setCount] = useState(0)
  const isFirstRender = useIsFirstRender()

  return (
    <>
      {isFirstRender ? (
        <p>This is the first render</p>
      ) : (
        <p>This is not the first render</p>
      )}

      <button className='mt-4' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
      <p>TIP: Increasing the counter will trigger new renders</p>
    </>
  )
}
