import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <ul className='p-4'>
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
          <Link href='/counter-with-step'>Counter with step</Link>
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
          <Link href='/todo-list-with-filter-2'>Todo List with Filter 2</Link>
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
        <li>
          <Link href='/modal'>Modal</Link>
        </li>
        <li>
          <Link href='/exit-animation'>Exit Animation</Link>
        </li>
        <li>
          <Link href='/portals'>Portals</Link>
        </li>
        <li>
          <Link href='/search'>Search</Link>
        </li>
        <li>
          <Link href='/searchable-user-list'>Searchable User List</Link>
        </li>
        <li>
          <Link href='/expandable-faq-component'>Expandable FAQ Component</Link>
        </li>
        <li>
          <Link href='/remove-duplicate-items'>Remove Duplicate Items</Link>
        </li>
        <li>
          <Link href='/fetch-from-api'>Fetch from API</Link>
        </li>
        <li>
          <Link href='/fetch-from-api-pagination'>
            Fetch from API - Pagination
          </Link>
        </li>
        <li>
          <Link href='/focus'>Focus</Link>
        </li>
        <li>
          <Link href='/tabbed-panel'>Tabbed Panel</Link>
        </li>
      </ul>
    </>
  )
}
