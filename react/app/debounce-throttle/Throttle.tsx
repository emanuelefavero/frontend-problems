'use client'

import { useEffect, useRef, useState } from 'react'

// * Throttle - Ensures the processing of input happens at most once every given interval.

export default function Throttle() {
  const [text, setText] = useState('')
  const [throttledText, setThrottledText] = useState('')
  const lastRun = useRef<number>(0)

  useEffect(() => {
    const now = Date.now()
    const limit = 500 // 500ms delay

    if (now - lastRun.current >= limit) {
      setThrottledText(text)
      lastRun.current = now
    }
  }, [text])

  return (
    <div className='flex items-center gap-2'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='border px-2 py-1'
      />
      <div>{throttledText && throttledText}</div>
    </div>
  )
}
