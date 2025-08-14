'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// * A Portal is a way to render a component outside of its parent hierarchy

export default function Component({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // ? The children will be appended to the document.body
  return mounted ? createPortal(<>{children}</>, document.body) : null
}
