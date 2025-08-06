'use client'

import { useState } from 'react'

interface Props {
  eventType: 'onDrag' | 'onDragStart' | 'onDragEnd'
}

export default function DraggableBox({ eventType }: Props) {
  const [dragBoxColor, setDragBoxColor] = useState(false)

  return (
    <div
      draggable
      {...{ [eventType]: () => setDragBoxColor(!dragBoxColor) }}
      className={`${
        dragBoxColor ? 'bg-amber-500' : 'bg-green-500'
      } flex h-20 w-20 cursor-grab items-center justify-center rounded`}
    >
      Drag me
    </div>
  )
}
