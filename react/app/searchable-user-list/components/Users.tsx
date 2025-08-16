'use client'

import { useId, useState } from 'react'
import { users as initialUsers } from '../data/users'
import type { User } from '../types/users'

export default function Component() {
  const [users] = useState<User[]>(initialUsers)
  const [input, setInput] = useState('')
  const searchUsersId = useId()

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase()),
  )

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
        onChange={(e) => setInput(e.target.value.trim())}
        value={input}
      />

      <ul className='p-2'>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
