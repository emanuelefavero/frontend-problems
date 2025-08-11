'use client'

import { useEffect, useState } from 'react'

// Mock server data
const posts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Title ${i + 1}`,
  description: `Description ${i + 1}`,
}))

const PAGE_SIZE = 5

// Simulate server-side fetch
function fetchPosts(page: number, pageSize: number) {
  return new Promise<{ data: typeof posts; total: number }>((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize
      const end = start + pageSize
      resolve({
        data: posts.slice(start, end),
        total: posts.length,
      })
    }, 300) // Simulate network delay
  })
}

export default function Component() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<typeof posts>([])
  const [total, setTotal] = useState(0)
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchPosts(page, PAGE_SIZE).then((res) => {
      setData(res.data)
      setTotal(res.total)
      setLoading(false)
    })
  }, [page])

  return (
    <div className='max-w-sm'>
      <div className='flex min-h-[350px] flex-col items-center justify-center'>
        {loading ? (
          <div className='py-4 text-center'>Loading...</div>
        ) : (
          <ul className='w-full divide-y divide-gray-200/20'>
            {data.map((post) => (
              <li key={post.id} className='py-3'>
                <div className='font-semibold'>{post.title}</div>
                <div className='text-sm'>{post.description}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || loading}
        >
          Next
        </button>
      </div>
    </div>
  )
}
