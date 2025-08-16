'use client'

import { useId, useState } from 'react'
import { users as initialUsers } from '../data/users'
import type { User } from '../types/users'

export default function Component() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [input, setInput] = useState('')
  const searchUsersId = useId()

  const handleSearchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setInput(value)

    // Update the user list based on the search input
    setUsers(
      initialUsers.filter((user) => user.name.toLowerCase().includes(value)),
    )
  }

  if (!users) return null

  return (
    <>
      <label htmlFor={searchUsersId} className='sr-only'>
        Search Users
      </label>
      <input
        type='text'
        placeholder='Search Users'
        id={searchUsersId}
        onChange={handleSearchUsers}
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
