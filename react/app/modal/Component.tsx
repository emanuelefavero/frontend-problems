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
          />

          <div
            className='fixed inset-0 z-50 flex items-center justify-center'
            aria-hidden={!open}
          >
            {/* Modal Card */}
            <div
              className='flex flex-col gap-2 rounded bg-white p-4 shadow-sm shadow-black/30 dark:bg-blue-950 dark:shadow-black'
              role='dialog'
              aria-modal='true'
            >
              <h2 className='text-lg font-semibold'>Modal</h2>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
