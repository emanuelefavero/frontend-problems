'use client'

import { useState, useEffect, useRef } from 'react'

export function useHover(): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsHovered(false)

    const element = ref.current

    if (!element) return

    element.addEventListener('mouseenter', () => setIsHovered(true))
    element.addEventListener('mouseleave', () => setIsHovered(false))

    return () => {
      element.removeEventListener('mouseenter', () => setIsHovered(true))
      element.removeEventListener('mouseleave', () => setIsHovered(false))
    }
  }, [ref])

  return [ref, isHovered]
}
