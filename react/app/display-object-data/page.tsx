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
  const [inputCity, setInputCity] = useState('')
  const [currentCity, setCurrentCity] = useState<City | null>(null)
  const [cityNotFound, setCityNotFound] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const formattedCity = formatCity(inputCity)

    if (temperatures[formattedCity]) {
      setCurrentCity(temperatures[formattedCity])
      setCityNotFound(false)
    } else {
      setCurrentCity(null)
      setCityNotFound(true)
    }
  }

  return (
    <>
      <h1>Display object data</h1>

      {/* Display all cities */}
      {Object.keys(temperatures).map((city) => (
        <div key={city}>
          <h3 className='font-bold text-xl'>{city}</h3>
          <p>Temperature: {temperatures[city].temperature}</p>
          <p>Humidity: {temperatures[city].humidity}</p>
        </div>
      ))}

      {/* Search city */}
      <h2 className='text-3xl font-bold'>Search City</h2>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='City...'
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      {/* Display searched city */}
      {currentCity && (
        <div>
          <h3 className='font-bold text-xl'>
            {Object.keys(temperatures).find(
              (city) => temperatures[city] === currentCity
            )}
          </h3>
          <p>Temperature: {currentCity.temperature}</p>
          <p>Humidity: {currentCity.humidity}</p>
        </div>
      )}

      {cityNotFound && <p>City not found</p>}
    </>
  )
}

// Helper function to format city name
function formatCity(city: string) {
  return city
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
