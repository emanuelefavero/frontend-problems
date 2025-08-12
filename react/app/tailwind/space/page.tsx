export default function Page() {
  return (
    <>
      <h1>space</h1>

      <p className='mb-4'>
        Use the space utilities to create consistent spacing between elements
        even without flex and grid.
      </p>

      <div className='space-y-2'>
        <div className='size-24 bg-teal-500'>Item 1</div>
        <div className='size-24 bg-teal-500'>Item 2</div>
        <div className='size-24 bg-teal-500'>Item 3</div>
      </div>
    </>
  )
}
