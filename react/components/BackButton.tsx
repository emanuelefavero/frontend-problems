'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function BackButton() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') return null

  return (
    <button
      aria-label='Back'
      onClick={() => router.back()}
      className='text-black dark:text-white p-0 px-2 outline-none bg-transparent hover:bg-transparent focus:ring-0 focus:ring-offset-0 active:scale-95 transition-transform duration-150 hover:scale-105'
    >
      ←
    </button>
  )
}
