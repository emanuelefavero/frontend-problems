'use client'

import { useEffect, useRef, useState } from 'react'

export default function Component() {
  const [show, setShow] = useState(false)
  const [disappearing, setDisappearing] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggle = () => {
    // If the element is not currently shown, show it
    if (!show) return setShow(true)

    // If the element is currently shown, start the exit animation and then hide it
    setDisappearing(true)
    timeout.current = setTimeout(() => {
      setShow(false)
      setDisappearing(false)
    }, 250) // ? Make sure to match the duration of the CSS animation (250ms)
  }

  // Cleanup the timeout on unmount
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [])

  return (
    <>
      {/* Toggle Button */}
      <button onClick={toggle} className='mb-4'>
        Toggle Text
      </button>

      {/* Show/Hide Text */}
      {show && (
        <h2
          className={`w-fit rounded-lg bg-sky-600 p-4 text-white shadow-md shadow-black/30 transition-all ${disappearing ? 'animate-disappear' : 'animate-appear'}`}
        >
          Hello World
        </h2>
      )}
    </>
  )
}
