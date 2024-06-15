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
      } w-20 h-20 rounded flex justify-center items-center cursor-grab`}
    >
      Drag me
    </div>
  )
}
