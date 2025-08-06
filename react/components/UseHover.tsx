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
        } h-40 w-full p-2 text-white`}
        ref={ref as RefObject<HTMLDivElement | null>}
      >
        {isHovered ? 'Hovered' : 'Not hovered'}
      </div>
    </>
  )
}
