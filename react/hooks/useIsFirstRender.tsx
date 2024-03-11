'use client'

import { useRef, useEffect } from 'react'

export function useIsFirstRender() {
  const isFirst = useRef(true)

  useEffect(() => {
    isFirst.current = false
  }, [])

  return isFirst.current
}
