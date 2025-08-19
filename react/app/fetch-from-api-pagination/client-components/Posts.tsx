'use client'

import React, { useCallback, useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  body: string
}

const POSTS_PER_PAGE = 5
const TOTAL_POSTS = 100
const totalPages = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)

export default function Component() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Pagination
  const [page, setPage] = useState<number>(1)
  const offset = (page - 1) * POSTS_PER_PAGE

  // TIP: The `useCallback` hook is used here so we can avoid putting the `fetchPosts` function inside the `useEffect` hook in case we want to also call it from a button click
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
      <button
        onClick={() => {
          setPage(1) // Reset to the first page
          // TIP: Since the `fetchPosts` function uses the `offset` variable that depends on the `page` state, simply updating the `page` state will trigger the `useEffect` to call `fetchPosts` again so no need to call `fetchPosts` here
        }}
        className='mb-4'
      >
        Refresh
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul className='mb-4 max-w-prose'>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className='text-xl font-semibold'>
              {post.id} - {post.title}
            </h2>
            <p className='opacity-80'>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className='flex w-fit items-center justify-center gap-2'>
        {/* First Page */}
        <button
          onClick={() => {
            setPage(1)
          }}
          disabled={page === 1}
          className='disabled:pointer-events-none disabled:opacity-50'
        >
          1
        </button>

        <button
          onClick={() => {
            setPage((prev) => (prev === 1 ? 1 : prev - 1))
          }}
          disabled={page === 1}
          className='disabled:pointer-events-none disabled:opacity-50'
        >
          Prev
        </button>
        <div>
          Page {page} of {totalPages}
        </div>
        <button
          onClick={() => {
            setPage((prev) => (prev === totalPages ? totalPages : prev + 1))
          }}
          disabled={page === totalPages}
          className='disabled:pointer-events-none disabled:opacity-50'
        >
          Next
        </button>

        {/* Last Page */}
        <button
          onClick={() => {
            setPage(totalPages)
          }}
          disabled={page === totalPages}
          className='disabled:pointer-events-none disabled:opacity-50'
        >
          {totalPages}
        </button>
      </div>
    </div>
  )
}
