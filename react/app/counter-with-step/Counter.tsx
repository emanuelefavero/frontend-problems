'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 1) {
      setStep(1)
      return
    }
    setStep(Number(e.target.value))
  }

  const handleIncrement = () => setCount((prev) => prev + step)
  const handleDecrement = () => count > 0 && setCount((prev) => prev - step)
  const handleReset = () => setCount(0)

  return (
    <>
      <p>{count}</p>

      <div>
        <button aria-label='Increment' onClick={handleIncrement}>
          +
        </button>
        <button aria-label='Decrement' onClick={handleDecrement}>
          -
        </button>
        <button aria-label='Reset' onClick={handleReset}>
          C
        </button>
      </div>

      <div>
        <label htmlFor='step' className='sr-only'>
          Step
        </label>
        <input
          type='number'
          className='w-fit'
          name='step'
          id='step'
          value={step}
          onChange={handleStepChange}
        />
      </div>
    </>
  )
}
