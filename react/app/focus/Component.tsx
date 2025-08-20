'use client'

import { useEffect, useRef } from 'react'

export default function Component() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input type='text' ref={inputRef} placeholder='Hello' />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
      <button onClick={() => inputRef.current?.blur()}>Blur</button>
    </>
  )
}
