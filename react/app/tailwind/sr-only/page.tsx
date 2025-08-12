export default function Page() {
  return (
    <>
      <h1>sr-only</h1>

      <p className='mb-4'>
        Use the <code>sr-only</code> utility to hide elements visually but keep
        them accessible to screen readers.
      </p>

      <div className='sr-only'>Will only appear for screen readers</div>

      <div className='sr-only md:not-sr-only'>
        Will only appear for screen readers on small screens
      </div>
    </>
  )
}
