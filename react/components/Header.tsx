import BackButton from '@/components/BackButton'
import HomeButton from '@/components/HomeButton'

export default function Header() {
  return (
    <header className='mb-4 flex w-full bg-indigo-100 px-2 py-2 dark:bg-indigo-950'>
      <HomeButton />
      <BackButton />
    </header>
  )
}
