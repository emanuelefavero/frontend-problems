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
        <li>
          <Link href='/use-is-first-render'>useIsFirstRender</Link>
        </li>
        <li>
          <Link href='/use-hover'>useHover</Link>
        </li>
        <li>
          <Link href='/color-boxes'>Color boxes</Link>
        </li>
        <li>
          <Link href='/display-object-data'>Display object data</Link>
        </li>
        <li>
          <Link href='/props-spread-operator'>Props Spread Operator</Link>
        </li>
        <li>
          <Link href='/date'>Date</Link>
        </li>
        <li>
          <Link href='/events'>Events</Link>
        </li>
        <li>
          <Link href='/draggable-element'>Draggable element</Link>
        </li>
      </ul>
    </>
  )
}
