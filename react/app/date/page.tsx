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

  const formatDate = (number: number): string => String(number).padStart(2, '0')

  return (
    <>
      <h1>Working with dates in React</h1>

      <h2 className='font-bold'>Current Date</h2>
      <p>
        {currentDate.getDate()}/{currentDate.getMonth() + 1}/
        {currentDate.getFullYear()}
      </p>
      <p>
        {formatDate(currentDate.getHours())}:
        {formatDate(currentDate.getMinutes())}:
        {formatDate(currentDate.getSeconds())}
      </p>
    </>
  )
}
