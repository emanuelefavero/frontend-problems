'use client'

import { useState } from 'react'

// TYPES
type Item = string
type Items = Item[]

// UTILS
const shuffle = (items: Items) => items.slice().sort(() => Math.random() - 0.5)

const getUniqueItems = (items: Items) => {
  return [...new Set(items)]
}

// DATA
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape']
const initialUniqueItems = getUniqueItems(items)

export default function Component() {
  const [uniqueItems, setUniqueItems] = useState<Items>(initialUniqueItems)

  // * Shuffle items
  const shuffleItems = () => {
    setUniqueItems((prev) => {
      let shuffled = shuffle(prev)

      // Ensure the shuffled array is different from the previous one
      while (shuffled.join(',') === prev.join(',')) {
        shuffled = shuffle(prev)
      }

      return shuffled
    })
  }

  return (
    <div>
      {/* Shuffle Button */}
      <button onClick={shuffleItems} className='mb-4'>
        Shuffle Items
      </button>

      {/* Render unique items here */}
      <ul>
        {uniqueItems.map((item: Item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
