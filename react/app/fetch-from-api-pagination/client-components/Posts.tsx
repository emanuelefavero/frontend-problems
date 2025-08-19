'use client'

import React, { useCallback, useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  body: string
}

const POSTS_PER_PAGE = 5

export default function Component() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Pagination
  const [page, setPage] = useState<number>(1)
  const offset = (page - 1) * POSTS_PER_PAGE

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_start=${offset}`,
      )
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }, [offset])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold'>Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {posts && (
        <ul className='max-w-prose'>
          {posts.map((post) => (
            <li key={post.id}>
              <h2 className='text-xl font-semibold'>
                {post.id} - {post.title}
              </h2>
              <p className='opacity-80'>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <button
        onClick={() => {
          setPage((prev) => prev + 1)
        }}
      >
        Next page
      </button>
    </div>
  )
}
