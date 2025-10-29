'use client'

import { useEffect, useState } from 'react'
import { useIsMounted } from './hooks/useIsMounted'

export default function Component() {
  const isMounted = useIsMounted()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(isMounted())
  }, [isMounted])

  return (
    <>
      <p>Is this component mounted?</p>
      <p>{mounted ? 'Yes' : 'No'}</p>
    </>
  )
}
