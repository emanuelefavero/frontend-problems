import Debounce from './Debounce'
import Throttle from './Throttle'

export default function Page() {
  return (
    <>
      <h1>Debounce and Throttle</h1>

      <div className='flex flex-col gap-2'>
        <Debounce />
        <Throttle />
      </div>
    </>
  )
}
