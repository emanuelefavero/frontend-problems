'use client'
import { useState } from 'react'

export default function Page() {
  // onClick
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <h1>Events</h1>

      <h2>onClick</h2>
      <button
        onClick={() => setClicked(!clicked)}
        className={clicked ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
      >
        {clicked ? 'Clicked' : 'Click Me'}
      </button>
    </>
  )
}
