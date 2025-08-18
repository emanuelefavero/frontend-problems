'use client'

import React, { useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  body: string
}

export default function Component() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    setLoading(true)
    setError(null)

    // TIP: JSONPlaceholder also supports paged requests for pagination (the minimum number of posts per_page is 10)
    // 'https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10'

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5&_start=0',
      )
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold'>Posts</h2>
      <button onClick={fetchPosts} className='mb-4'>
        Refresh
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {posts && (
        <ul className='max-w-prose'>
          {posts.map((post) => (
            <li key={post.id}>
              <h2 className='text-xl font-semibold'>{post.title}</h2>
              <p className='opacity-80'>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
