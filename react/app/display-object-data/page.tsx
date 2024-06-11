'use client'

import { useState } from 'react'

interface City {
  temperature: string
  humidity: string
}

interface Temperatures {
  [key: string]: City
}

export default function Page() {
  const [temperatures, setTemperatures] = useState<Temperatures>({
    'New York': {
      temperature: '22c',
      humidity: '70%',
    },
    'Los Angeles': {
      temperature: '30c',
      humidity: '40%',
    },
  })

  return (
    <>
      <h1>Display object data</h1>

      {Object.keys(temperatures).map((city) => (
        <div key={city}>
          <h3 className='font-bold text-xl'>{city}</h3>
          <p>Temperature: {temperatures[city].temperature}</p>
          <p>Humidity: {temperatures[city].humidity}</p>
        </div>
      ))}
    </>
  )
}
