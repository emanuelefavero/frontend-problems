'use client'

import { useState } from 'react'

export default function Component() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {/* Overlay */}
      {showModal && (
        <div
          className='fixed inset-0 z-40 bg-blue-950/20 backdrop-blur-sm transition-opacity'
          aria-hidden='true'
        />
      )}

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='rounded bg-blue-950 p-4 text-white shadow-sm shadow-black'>
            <h2 className='text-lg font-semibold'>Modal</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
