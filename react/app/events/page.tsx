'use client'
import { useState } from 'react'

export default function Page() {
  // onClick
  const [clicked, setClicked] = useState(false)

  // onChange
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  // onSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Form submitted')
  }

  return (
    <>
      <h1>Events</h1>

      {/* onClick */}
      <h2 className='mb-2'>onClick</h2>
      <button
        onClick={() => setClicked(!clicked)}
        className={clicked ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
      >
        {clicked ? 'Clicked' : 'Click Me'}
      </button>

      <hr className='my-4 border-slate-500 border-opacity-25' />

      {/* onChange */}
      <h2 className='mb-2'>onChange</h2>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Write something...'
        className='mb-2'
      />
      {/* TIP: \u00A0 adds a non breaking space to prevent content shifting */}
      <p className='min-h-6'>{inputValue || '\u00A0'}</p>

      <hr className='my-4 border-slate-500 border-opacity-25' />

      {/* onSubmit */}
      <h2 className='mb-2'>onSubmit</h2>
      <form onSubmit={handleSubmit}>
        <button type='submit' className='bg-violet-500'>
          Submit
        </button>
      </form>

      <hr className='my-4 border-slate-500 border-opacity-25' />
    </>
  )
}
