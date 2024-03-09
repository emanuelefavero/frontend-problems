'use client'

import useTimeout from '@/hooks/useTimeout'

export default function Page() {
  useTimeout(() => console.log('hello from useTimeout!'), 1000)

  return (
    <>
      <h1>useTimeout</h1>

      <p>Check the console for a message after 1 second.</p>
    </>
  )
}
