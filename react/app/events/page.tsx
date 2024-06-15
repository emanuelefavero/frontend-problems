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

  // onMouseEnter, onMouseLeave
  const [entered, setEntered] = useState(false)

  // onFocus, onBlur
  const [focused, setFocused] = useState(false)

  // onKeyDown, onKeyUp
  const [pressedKey, setPressedKey] = useState('')
  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setPressedKey(e.key)
  }

  // onDrag
  const [dragBoxColor, setDragBoxColor] = useState(false)
  const handleDrag = () => {
    setDragBoxColor(!dragBoxColor)
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

      {/* onMouseEnter */}
      {/* TIP: onMouseEnter and onMouseLeave are similar to onMouseOver and onMouseOut, but they don't bubble. This means that when the user hovers over their children, they do not fire an event. */}
      <h2 className='mb-2'>onMouseEnter, onMouseLeave</h2>
      <div
        onMouseEnter={() => setEntered(true)}
        onMouseLeave={() => setEntered(false)}
        className={`w-20 h-20 flex justify-center items-center select-none rounded ${
          entered ? 'bg-green-500' : 'bg-rose-500'
        }`}
      >
        {entered ? 'Entered' : 'Enter'}
      </div>

      <hr className='my-4 border-slate-500 border-opacity-25' />

      {/* onFocus, onBlur */}
      <h2 className='mb-2'>onFocus</h2>
      <input
        type='text'
        placeholder={focused ? 'Focused' : 'Focus here'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={
          focused ? 'placeholder-blue-400 text-blue-100 bg-blue-800' : ''
        }
      />

      <hr className='my-4 border-slate-500 border-opacity-25' />

      {/* onKeyDown, onKeyUp */}
      <h2 className='mb-2'>onKeyDown</h2>
      <input
        type='text'
        placeholder='Press any key'
        onKeyDown={handleKeyPressed}
      />
      <h2 className='mb-2 mt-2'>onKeyUp</h2>
      <input
        type='text'
        placeholder='Press any key'
        onKeyUp={handleKeyPressed}
      />

      <p className='min-h-6 mt-2'>
        <small>Last pressed key:</small> <code>{pressedKey || '\u00A0'}</code>
      </p>

      <hr className='my-4 border-slate-500 border-opacity-25' />

      {/* onDrag, onDragStart */}
      {/* TIP: onDrag will be called repeatedly when the element is dragged, while onDragStart will be called just one time after the element is dragged */}
      <h2 className='mb-2 mt-2'>onDrag</h2>

      <div
        draggable
        onDrag={handleDrag}
        className={`${
          dragBoxColor ? 'bg-amber-500' : 'bg-green-500'
        } w-20 h-20 rounded flex justify-center items-center`}
      >
        Drag me
      </div>

      <h2 className='mb-2 mt-2'>onDragStart</h2>

      <div
        draggable
        onDragStart={handleDrag}
        className={`${
          dragBoxColor ? 'bg-amber-500' : 'bg-green-500'
        } w-20 h-20 rounded flex justify-center items-center`}
      >
        Drag me
      </div>
    </>
  )
}
