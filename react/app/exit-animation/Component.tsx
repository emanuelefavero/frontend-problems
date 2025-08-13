'use client'

import { useEffect, useRef, useState } from 'react'

export default function Component() {
  const [show, setShow] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleHide = () => {
    if (!show) return
    setShow(false)
    timeoutRef.current = setTimeout(() => {
      setShouldRender(false)
    }, 250) // match the animation duration
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Reset shouldRender if show is set to true again (optional, for re-showing)
  useEffect(() => {
    if (show) setShouldRender(true)
  }, [show])

  return (
    <>
      <button onClick={handleHide} className='mb-4'>
        Hide Text
      </button>

      {shouldRender && (
        <h2
          className={`w-fit rounded-lg bg-sky-600 p-4 text-white shadow-md shadow-black/30 transition-all ${show ? 'animate-fade-in' : 'animate-disappear'}`}
        >
          Hello World
        </h2>
      )}
    </>
  )
}
