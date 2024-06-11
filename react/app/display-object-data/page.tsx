'use client'

interface City {
  temperature: string
  humidity: string
}

interface Temperatures {
  [key: string]: City
}

const temperatures: Temperatures = {
  'New York': {
    temperature: '22c',
    humidity: '70%',
  },
  'Los Angeles': {
    temperature: '30c',
    humidity: '40%',
  },
}

export default function Page() {
  return (
    <>
      <h1>Display object data</h1>

      {Object.keys(temperatures).map((city) => (
        <div key={city}>
          <h2 className='font-bold text-xl'>{city}</h2>
          <p>Temperature: {temperatures[city].temperature}</p>
          <p>Humidity: {temperatures[city].humidity}</p>
        </div>
      ))}
    </>
  )
}
