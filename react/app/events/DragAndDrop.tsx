'use client'

import { useState } from 'react'

interface Props {
  eventType: 'onDragEnter' | 'onDragLeave' | 'onDragOver'
}

export default function DragAndDrop({ eventType }: Props) {
  const [dropped, setDropped] = useState(false)

  return (
    <div className='container flex justify-between'>
      <div
        draggable
        className={`flex h-20 w-20 cursor-grab items-center justify-center rounded bg-fuchsia-500 ${
          dropped && 'invisible'
        }`}
      >
        Drag me
      </div>

      <div
        draggable
        {...{
          [eventType]: (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            setDropped(true)
          },
        }}
        className={`${
          dropped && 'bg-green-500'
        } flex h-20 w-20 items-center justify-center rounded border-2 border-dotted text-center`}
      >
        {dropped ? 'Dropped' : 'Drop here'}
      </div>
    </div>
  )
}
