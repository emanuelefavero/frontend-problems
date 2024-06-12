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

  const getDaysUntilChristmas = () => {
    const currentYear = currentDate.getFullYear()
    const christmas = new Date(currentYear, 11, 25)
    const timeDifference = christmas.getTime() - currentDate.getTime()
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference
  }

  return (
    <>
      <h1>Working with dates in React</h1>

      {/* TIP: When working with dates and timestamps in Next.js, the server and client might render slightly different values. If you get an hydration error it might be useful to add a suppressHydrationWarning attribute */}
      <div suppressHydrationWarning>
        <h2>Current Date</h2>
        <p>
          {currentDate.getDate()}/{currentDate.getMonth() + 1}/
          {currentDate.getFullYear()}
        </p>
        <p>
          {formatDate(currentDate.getHours())}:
          {formatDate(currentDate.getMinutes())}:
          {formatDate(currentDate.getSeconds())}
        </p>

        <h2>Days until Christmas</h2>
        <p>{getDaysUntilChristmas()}</p>
      </div>
    </>
  )
}
