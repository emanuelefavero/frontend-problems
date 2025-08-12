export default function Page() {
  return (
    <>
      <h1>divide</h1>

      <p className='mb-4'>
        Use the divide utilities to create dividers between elements. This
        automatically prevents the last element from having a divider.
      </p>

      <div className='max-w-2xs divide-y divide-gray-400/50'>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </>
  )
}
