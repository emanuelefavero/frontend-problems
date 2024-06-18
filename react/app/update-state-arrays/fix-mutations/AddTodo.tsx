import { useState } from 'react'

interface Props {
  onAddTodo: (title: string) => void
}

export default function AddTodo({ onAddTodo }: Props) {
  const [title, setTitle] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTitle('')
      onAddTodo(title)
    }
  }

  return (
    <div className='mb-2'>
      <input
        required
        placeholder='Add todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
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
