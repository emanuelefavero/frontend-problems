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
            className='fixed inset-0 z-40 bg-blue-950/20 backdrop-blur-sm transition-opacity'
            aria-hidden='true'
          />

          <div
            className='fixed inset-0 z-50 flex items-center justify-center'
            aria-hidden={!open}
          >
            {/* Modal Card */}
            <div
              className='flex flex-col gap-2 rounded bg-blue-950 p-4 text-white shadow-sm shadow-black'
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
