'use client'

import { useState } from 'react'

interface ColorBoxProps {
  color: string
  index: number
  handleClick: (color: string, index: number) => void
}

function ColorBox({ color, index, handleClick }: ColorBoxProps) {
  return (
    <button
      style={{
        backgroundColor: color,
        width: '33px',
        height: '33px',
      }}
      onClick={() => handleClick(color, index)}
    ></button>
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
          <li key={index}>
            <ColorBox color={color} index={index} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </>
  )
}
