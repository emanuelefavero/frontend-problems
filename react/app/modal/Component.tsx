'use client'

import { useState } from 'react'

export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {/* Modal */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className='fixed inset-0 z-40 bg-blue-50/20 backdrop-blur-sm transition-opacity dark:bg-blue-950/20'
            aria-hidden='true'
            onClick={() => setOpen(false)} // clicking on the overlay (everywhere outside the modal card) closes the modal
          />

          {/* Modal Card */}
          <div
            className='absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-white p-4 shadow-sm shadow-black/30 dark:bg-blue-950 dark:shadow-black'
            role='dialog'
            aria-modal='true'
            aria-hidden={!open}
            onClick={(e) => e.stopPropagation()} // clicks inside modal card do not close the modal
          >
            <h2 className='text-lg font-semibold'>Modal</h2>
            <p>This is a modal dialog. Click outside to close it.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </>
      )}
    </>
  )
}
