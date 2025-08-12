import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <ul>
        <li>
          <Link href='/test'>Test page</Link>
        </li>
        <li>
          <Link href='/apple-scroll-animation'>Apple scroll animation</Link>
        </li>
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
        <li>
          <Link href='/update-state-arrays'>Update state arrays</Link>
        </li>
        <li>
          <Link href='/todo-list-with-filter'>Todo List with Filter</Link>
        </li>
        <li>
          <Link href='/shopping-cart-summary'>Shopping Cart Summary</Link>
        </li>
        <li>
          <Link href='/pagination'>Pagination</Link>
        </li>
        <li>
          <Link href='/bento-grid'>Bento Grid</Link>
        </li>
        <li>
          <Link href='/tailwind'>Tailwind CSS</Link>
        </li>
      </ul>
    </>
  )
}
