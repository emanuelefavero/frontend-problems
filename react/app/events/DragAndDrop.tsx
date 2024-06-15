'use client'

import { useState } from 'react'

interface Props {
  eventType: 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'
}

export default function DragAndDrop({ eventType }: Props) {
  const [dropped, setDropped] = useState(false)

  return (
    <div className='container flex justify-between'>
      <div
        draggable
        className={`bg-fuchsia-500 w-20 h-20 rounded flex justify-center items-center cursor-grab ${
          dropped && 'invisible'
        }`}
      >
        Drag me
      </div>

      <div
        draggable
        {...{ [eventType]: () => setDropped(!dropped) }}
        className={`${
          dropped && 'bg-green-500'
        } border-2 border-dotted w-20 h-20 rounded flex justify-center items-center text-center`}
      >
        {dropped ? 'Dropped' : 'Drop here'}
      </div>
    </div>
  )
}
