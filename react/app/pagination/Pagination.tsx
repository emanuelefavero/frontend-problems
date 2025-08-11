'use client'

import SpinnerIcon from '@/components/icons/SpinnerIcon'
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
    setTimeout(
      () => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        resolve({
          data: posts.slice(start, end),
          total: posts.length,
        })
      },

      // Simulate network delay (random number between 200 and 600)
      Math.floor(Math.random() * (600 - 200 + 1)) + 200,
    )
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

  const disabledPrev = page === 1 || loading
  const disabledNext = page === totalPages || loading
  const disabledStyles = 'pointer-events-none cursor-not-allowed opacity-50'

  return (
    <div className='max-w-sm'>
      <div className='flex min-h-[350px] flex-col items-center justify-center'>
        {loading ? (
          <div className='flex h-fit w-fit items-center justify-center rounded-full p-4'>
            <SpinnerIcon className='h-8 w-8' />
          </div>
        ) : (
          <ul className='w-full divide-y divide-gray-200/20'>
            {data.map((post) => (
              <li key={post.id} className='py-3'>
                <div className='font-semibold'>{post.title}</div>
                <div className='text-sm text-slate-500 dark:text-slate-400'>
                  {post.description}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className={disabledPrev ? disabledStyles : ''}
          disabled={disabledPrev}
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className={disabledNext ? disabledStyles : ''}
          disabled={disabledNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}
