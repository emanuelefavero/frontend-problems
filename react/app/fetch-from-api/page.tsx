import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Fetch from API</h1>
      <ul>
        <li>
          <Link href='/fetch-from-api/client-components'>
            Client Components
          </Link>
        </li>
        <li>
          <Link href='/fetch-from-api/server-components'>
            Server Components
          </Link>
        </li>
      </ul>
    </>
  )
}
