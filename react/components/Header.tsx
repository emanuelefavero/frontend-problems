import Link from 'next/link'
import Image from 'next/image'
import BackButton from '@/components/BackButton'

export default function Header() {
  return (
    <header className='w-full flex bg-indigo-100 dark:bg-indigo-950 px-2 py-2 mb-4'>
      <Link href='/' className='font-bold uppercase mr-2'>
        <Image
          src='/home.svg'
          alt='logo'
          width={24}
          height={24}
          className='dark:invert active:scale-95 transition-transform duration-150 hover:scale-105'
        />
      </Link>
      <BackButton />
    </header>
  )
}
