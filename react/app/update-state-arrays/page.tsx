'use client'
import { useState } from 'react'

interface User {
  id: number
  name: string
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([{ id: 0, name: 'Walter' }])
  const [inputValue, setInputValue] = useState('')

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return

    setUsers([...users, { id: users.length, name: inputValue }])
    setInputValue('')
  }

  return (
    <>
      <h1>Update state arrays</h1>

      <form onSubmit={handleAddUser}>
        <h2>Add user</h2>
        <input
          type='text'
          required
          placeholder='New user'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Add user</button>
      </form>

      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
