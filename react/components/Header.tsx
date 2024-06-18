import HomeButton from '@/components/HomeButton'
import BackButton from '@/components/BackButton'

export default function Header() {
  return (
    <header className='w-full flex bg-indigo-100 dark:bg-indigo-950 px-2 py-2 mb-4'>
      <HomeButton />
      <BackButton />
    </header>
  )
}
