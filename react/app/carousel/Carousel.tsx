'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const items = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Card ${i + 1}`,
}))

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const itemsPerPage = 4
  const maxIndex = Math.floor(items.length / itemsPerPage) - 1

  const next = () => setIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  const prev = () => setIndex((prev) => (prev === 0 ? maxIndex : prev - 1))

  const visibleItems = items.slice(
    index * itemsPerPage,
    index * itemsPerPage + itemsPerPage,
  )

  return (
    <div className='relative mx-auto w-full overflow-hidden p-6'>
      {/* Carousel Items */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className='flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-100 p-8 text-lg font-semibold shadow'
            >
              {item.title}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={prev}
        className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full'
      >
        <span className='h-6 w-6'>&lt;</span>
      </button>
      <button
        onClick={next}
        className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full'
      >
        <span className='h-6 w-6'>&gt;</span>
      </button>
    </div>
  )
}
