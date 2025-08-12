export default function Page() {
  return (
    <>
      <h1>grid-cols-custom</h1>

      <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 bg-indigo-500'>
        <div className='min-h-80 bg-teal-500 p-4'>Custom Column 1</div>
        <div className='bg-yellow-500 p-4'>Custom Column 2</div>
        <div className='min-h-96 bg-pink-500 p-4'>Custom Column 3</div>
      </div>
    </>
  )
}
