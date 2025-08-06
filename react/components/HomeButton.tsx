'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HomeButton() {
  const pathname = usePathname()

  return (
    <Link href='/' className='mr-2 font-bold uppercase'>
      <Image
        src='/home.svg'
        alt='logo'
        width={24}
        height={24}
        className={`${
          pathname === '/' && 'opacity-75'
        } transition-transform duration-150 hover:scale-105 active:scale-95 dark:invert`}
      />
    </Link>
  )
}
