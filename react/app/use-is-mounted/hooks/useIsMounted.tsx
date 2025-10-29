'use client'

import { useEffect, useRef } from 'react'

/**
 * This hook returns a function that indicates whether the component is currently mounted.
 *
 * @returns A function that returns true if the component is mounted, false otherwise
 */

export function useIsMounted(): () => boolean {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return () => isMounted.current
}
