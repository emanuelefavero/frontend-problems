export default function Page() {
  return (
    <>
      <h1>mx-auto</h1>

      <p>
        Center element horizontally inside its container, without using flex or
        grid
      </p>

      <div className='bg-indigo-500 p-4'>
        <div className='mx-auto size-48 bg-teal-500'></div>
      </div>
    </>
  )
}
