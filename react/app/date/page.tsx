'use client'

import { useState, useEffect } from 'react'

export default function Page() {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <h1>Working with dates in React</h1>

      <h2>Current Date</h2>
      <p>
        {currentDate.getDate()}/{currentDate.getMonth() + 1}/
        {currentDate.getFullYear()}
      </p>
      <p>
        {currentDate.getHours()}:{currentDate.getMinutes()}
      </p>
    </>
  )
}
