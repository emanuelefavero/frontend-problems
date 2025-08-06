'use client'

import { useState } from 'react'

interface User {
  id: number
  name: string
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([
    { id: 0, name: 'Walter' },
    { id: 1, name: 'Jesse' },
  ])
  const [inputValue, setInputValue] = useState('')
  const [insertAt, setInsertAt] = useState<number>(users.length)

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

  // Insert into users (at a specific index)
  const handleInsertUser = () => {
    if (!inputValue) return

    const newUser = { id: users.length, name: inputValue }

    setUsers([...users.slice(0, insertAt), newUser, ...users.slice(insertAt)])
    setInputValue('')
    setInsertAt(insertAt === users.length ? insertAt + 1 : insertAt + 1)
  }

  // Reverse array
  const handleReverse = () => {
    const newUsers = [...users]
    newUsers.reverse()
    setUsers(newUsers)
  }

  return (
    <>
      <h1>Update users</h1>

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

      <button onClick={handleTransformUsers} className='mb-2 mr-2'>
        Transform Users
      </button>

      <button onClick={handleReverse} className='mb-2'>
        Reverse Users
      </button>

      {/* Insert users at specific index */}
      <div>
        <h2>Insert user at specific index</h2>
        <input
          type='text'
          required
          placeholder='New user'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleInsertUser}>Add user</button>

        <select
          value={insertAt}
          onChange={(e) => setInsertAt(Number(e.target.value))}
          className='p-2 text-slate-700'
        >
          {users.map((user, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}

          <option value={users.length}>End</option>
        </select>
      </div>

      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span className='mr-2'>{user.name}</span>
            <button
              aria-label='Delete user'
              onClick={() => handleDeleteUser(user.id)}
              className='bg-transparent p-2 text-rose-500 hover:bg-transparent hover:text-rose-400'
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
