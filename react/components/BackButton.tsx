'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function BackButton() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') return null

  return (
    <button
      aria-label='Back'
      onClick={() => router.back()}
      className='outline-hidden bg-transparent p-0 px-2 text-black transition-transform duration-150 hover:scale-105 hover:bg-transparent focus:ring-0 focus:ring-offset-0 active:scale-95 dark:text-white'
    >
      ←
    </button>
  )
}
