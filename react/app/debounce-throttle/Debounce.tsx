'use client'

import { useEffect, useState } from 'react'

// * Debounce - Delays the processing of the input until a certain period of inactivity has passed.

export default function Debounce() {
  const [text, setText] = useState('')
  const [debouncedText, setDebouncedText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    return () => clearTimeout(timeout)
  }, [text])

  return (
    <div className='flex items-center gap-2'>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>{debouncedText && debouncedText}</div>
    </div>
  )
}
