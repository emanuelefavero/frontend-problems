'use client'

import { useExitAnimation } from './useExitAnimation'

export default function Component() {
  const [show, disappearing, toggle] = useExitAnimation({ duration: 250 })

  return (
    <div className='min-h-32'>
      <button onClick={toggle} className='mb-4'>
        Toggle Text
      </button>
      {show && (
        <h2
          className={`w-fit rounded-lg bg-sky-600 p-4 text-white shadow-md shadow-black/30 transition-all ${disappearing ? 'animate-disappear' : 'animate-appear'}`}
        >
          Hello World
        </h2>
      )}
    </div>
  )
}
