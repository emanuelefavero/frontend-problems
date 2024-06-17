'use client'
import { useState } from 'react'

interface User {
  id: number
  name: string
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([{ id: 0, name: 'Walter' }])
  const [inputValue, setInputValue] = useState('')

  // Add user
  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return

    setUsers([...users, { id: users.length, name: inputValue }])
    setInputValue('')
  }

  // Delete user
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  // Transform users (map)
  const handleTransformUsers = () => {
    const transformedUsers = users.map((user) => {
      if (user.name === 'Walter') {
        return { ...user, name: 'Walter White' }
      }

      return user
    })

    setUsers(transformedUsers)
  }

  return (
    <>
      <h1>Update state arrays</h1>

      <form onSubmit={handleAddUser} className='mb-2'>
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

      <button onClick={handleTransformUsers} className='mb-2'>
        Transform Users
      </button>

      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span className='mr-2'>{user.name}</span>
            <button
              aria-label='Delete user'
              onClick={() => handleDeleteUser(user.id)}
              className='p-2 bg-transparent text-rose-500 hover:bg-transparent hover:text-rose-400'
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}