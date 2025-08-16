'use client'

import { useId, useState } from 'react'
import { users as initialUsers } from '../data/users'

export default function Component() {
  const [input, setInput] = useState('')
  const searchUsersId = useId()

  const filteredUsers = initialUsers.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase()),
  )

  if (!initialUsers) return null

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
