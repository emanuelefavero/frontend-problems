'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
  const pathname = usePathname()

  return (
    <>
      <h1>Update state arrays</h1>

      <h2 className='mb-2'>Go to related problems</h2>
      <ul>
        <li>
          <Link href={`${pathname}/update-users`}>Update users</Link>
        </li>
        <li>
          <Link href={`${pathname}/remove-item-from-shopping-cart`}>
            Remove item from shopping cart
          </Link>
        </li>
        <li>
          <Link href={`${pathname}/fix-mutations`}>Fix mutations</Link>
        </li>
      </ul>
    </>
  )
}
