'use client'

import { useId, useState } from 'react'
import { users as initialUsers } from '../data/users'
import type { User } from '../types/users'

export default function Component() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [input, setInput] = useState('')
  const searchUserId = useId()

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setInput(value)

    setUsers(
      initialUsers.filter((user) => user.name.toLowerCase().includes(value)),
    )
  }

  if (!users) return null

  return (
    <>
      <label htmlFor={searchUserId} className='sr-only'>
        Search User
      </label>
      <input
        type='text'
        placeholder='Search User'
        id={searchUserId}
        onChange={handleSearchUser}
        value={input}
      />

      <ul className='p-2'>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
