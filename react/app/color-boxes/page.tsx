'use client'

import './page.css'
import { useState } from 'react'

interface ColorBoxProps {
  color: string
  index: number
  handleClick: (color: string, index: number) => void
}

function ColorBox({ color, index, handleClick }: ColorBoxProps) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      onClick={() => handleClick(color, index)}
      className={`button-grow w-8 h-8 cursor-pointer`}
    ></div>
  )
}

export default function Page() {
  const [colors, setColors] = useState(['red', 'green', 'red'])

  const handleClick = (color: string, index: number) => {
    console.log(color)

    setColors((prev) => {
      const copy = [...prev]

      if (color === 'red') {
        copy[index] = 'green'
        copy.push('red')
      } else if (color === 'green') {
        copy.splice(index, 1)
      }

      return copy
    })
  }

  return (
    <>
      <h1>Color Boxes</h1>

      <ul>
        {colors.map((color, index) => (
          <li key={index} className='m-0 mb-2'>
            <ColorBox color={color} index={index} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </>
  )
}
