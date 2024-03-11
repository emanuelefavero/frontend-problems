'use client'

import { useHover } from '@/hooks/useHover'
import { RefObject } from 'react' // Add missing import

export default function UseHover() {
  const [ref, isHovered] = useHover()

  return (
    <>
      <div
        className={`${
          isHovered ? 'bg-emerald-500' : 'bg-rose-600'
        } w-full h-40 text-white p-2`}
        ref={ref as RefObject<HTMLDivElement>}
      >
        {isHovered ? 'Hovered' : 'Not hovered'}
      </div>
    </>
  )
}
