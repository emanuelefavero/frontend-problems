import { useState } from 'react'

interface Props {
  onAddTodo: (title: string) => void
}

export default function AddTodo({ onAddTodo }: Props) {
  const [title, setTitle] = useState('')

  return (
    <div className='mb-2'>
      <input
        placeholder='Add todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='mr-2'
      />
      <button
        onClick={() => {
          setTitle('')
          onAddTodo(title)
        }}
      >
        Add
      </button>
    </div>
  )
}
