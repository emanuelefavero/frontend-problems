'use client'

import { useDrag } from '@/hooks/useDrag'
import { useRef } from 'react'

export default function Page() {
  const draggableRef = useRef<HTMLDivElement>(null)

  const { position, handleMouseDown } = useDrag({
    ref: draggableRef,
  })

  return (
    <>
      <h1>Draggable Element</h1>

      <div
        className='fixed left-4 top-32'
        ref={draggableRef}
        style={{
          top: position.y,
          left: position.x,
        }}
      >
        <div
          className='cursor-move rounded-sm bg-violet-500 p-2'
          onMouseDown={handleMouseDown}
        >
          Drag me!
        </div>
      </div>
    </>
  )
}
