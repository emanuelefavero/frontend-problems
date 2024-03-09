'use client'

import { useEffect, useRef } from 'react'

export default function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const timeoutId = setTimeout(() => callbackRef.current(), delay)

    return () => clearTimeout(timeoutId)
  }, [delay]) // Only re-run if the delay changes
}

// TODO add react useTimeout link to README
