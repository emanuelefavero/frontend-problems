export default function Page() {
  return (
    <>
      <h1>size</h1>

      <p className='mb-4'>
        Instead of using <code>w-24</code> and <code>h-24</code>, use the{' '}
        <code>size-24</code> utility that sets both width and height
      </p>

      <div className='size-24 bg-teal-500'></div>
    </>
  )
}
