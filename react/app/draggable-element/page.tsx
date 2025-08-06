'use client'

import { useRef } from 'react'
import { useDrag } from '@/hooks/useDrag'

export default function Page() {
  const draggableRef = useRef<HTMLDivElement>(null)

  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  })

  return (
    <>
      <h1>Draggable Element</h1>

      <div
        className='fixed top-32 left-4'
        ref={draggableRef}
        style={{
          top: position.y,
          left: position.x,
        }}
      >
        <div
          className='p-2 bg-violet-500 rounded-sm cursor-move'
          onMouseDown={handleMouseDown}
        >
          Drag me!
        </div>
      </div>
    </>
  )
}
