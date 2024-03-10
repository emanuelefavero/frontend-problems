import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <ul>
        <li>
          <Link href='/use-timeout'>useTimeout</Link>
        </li>
        <li>
          <Link href='/counter'>Counter</Link>
        </li>
      </ul>
    </>
  )
}
