'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Loaded!')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <h1>Timeout</h1>

      {message}
    </>
  )
}
