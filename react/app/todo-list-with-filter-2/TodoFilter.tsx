import type { Filter } from './types/todos'

type Props = {
  filter: Filter
  setFilter: (filter: Filter) => void
}

export default function Component({ filter, setFilter }: Props) {
  return (
    <div className='mb-4 flex gap-2'>
      <button
        onClick={() => setFilter('all')}
        className={`${filter === 'all' ? 'bg-green-500' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`${filter === 'completed' ? 'bg-green-500' : ''}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('incomplete')}
        className={`${filter === 'incomplete' ? 'bg-green-500' : ''}`}
      >
        Incomplete
      </button>
    </div>
  )
}
