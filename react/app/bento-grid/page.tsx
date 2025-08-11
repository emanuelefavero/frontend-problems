// * This is a simple Bento Grid layout example using Tailwind CSS and Grid
// TIP: Bento Grid differs from Masonry layout in that it maintains a strict grid structure (like a Bento box), whereas Masonry allows for more fluid positioning of items

export default function Page() {
  return (
    <>
      <h1>Bento Grid</h1>

      <div className='grid auto-rows-[400px] gap-4 p-4 md:auto-rows-[200px] md:grid-cols-3 lg:grid-cols-4'>
        {/* Card 1 - tall */}
        <div className='flex items-center justify-center rounded-2xl bg-blue-500 p-4 text-xl font-bold text-white md:row-span-2'>
          Tall Card
        </div>

        {/* Card 2 - wide */}
        <div className='flex items-center justify-center rounded-2xl bg-pink-500 p-4 text-xl font-bold text-white md:col-span-2'>
          Wide Card
        </div>

        {/* Card 3 */}
        <div className='flex items-center justify-center rounded-2xl bg-green-500 p-4 text-xl font-bold text-white'>
          Card 3
        </div>

        {/* Card 4 */}
        <div className='flex items-center justify-center rounded-2xl bg-yellow-500 p-4 text-xl font-bold text-white'>
          Card 4
        </div>

        {/* Card 5 - large square */}
        <div className='flex items-center justify-center rounded-2xl bg-purple-500 p-4 text-xl font-bold text-white md:col-span-2 md:row-span-2'>
          Large Square
        </div>

        {/* Card 6 */}
        <div className='flex items-center justify-center rounded-2xl bg-orange-500 p-4 text-xl font-bold text-white'>
          Card 6
        </div>

        {/* Card 7 */}
        <div className='flex items-center justify-center rounded-2xl bg-red-500 p-4 text-xl font-bold text-white'>
          Card 7
        </div>
      </div>
    </>
  )
}
