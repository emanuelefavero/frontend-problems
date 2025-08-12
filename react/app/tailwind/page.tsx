import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>TailwindCSS</h1>

      <ul>
        <li>
          <Link href='/tailwind/mx-auto'>mx-auto</Link>
        </li>
        <li>
          <Link href='/tailwind/grid-cols-custom'>grid-cols-custom</Link>
        </li>
        <li>
          <Link href='/tailwind/size'>size</Link>
        </li>
        <li>
          <Link href='/tailwind/divide'>divide</Link>
        </li>
      </ul>
    </>
  )
}
