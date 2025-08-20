'use client'

import { useState } from 'react'

type Post = {
  id: number
  title: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'First Post',
  },
  {
    id: 2,
    title: 'Second Post',
  },
]

export default function Component() {
  const [search, setSearch] = useState('')
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.trim().toLowerCase()),
  )

  if (!posts.length) return null

  return (
    <>
      {/* Search */}
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='mb-4'
      />

      {/* Filtered Posts */}
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
