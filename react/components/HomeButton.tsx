'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeButton() {
  const pathname = usePathname()

  return (
    <Link href='/' className='font-bold uppercase mr-2'>
      <Image
        src='/home.svg'
        alt='logo'
        width={24}
        height={24}
        className={`${
          pathname === '/' && 'opacity-75'
        } dark:invert active:scale-95 transition-transform duration-150 hover:scale-105`}
      />
    </Link>
  )
}
