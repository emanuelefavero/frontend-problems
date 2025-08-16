'use client'

import { useId, useMemo, useState } from 'react'
import { users as initialUsers } from '../data/users'

export default function Component() {
  const [input, setInput] = useState('')
  const searchUsersId = useId()

  // TIP: In this case, useMemo could help when a parent component forces a re-render of this component by memoizing the filtered user list.
  const filteredUsers = useMemo(() => {
    return initialUsers.filter((user) =>
      user.name.toLowerCase().includes(input.toLowerCase()),
    )
  }, [input])

  if (!initialUsers) return null

  return (
    <>
      <h2 className='mb-2 text-xl font-bold'>Users with Memo</h2>

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
