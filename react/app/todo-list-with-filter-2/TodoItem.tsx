import type { Todo } from './types/todos'

type Props = {
  todo: Todo
  onToggleTodo: (id: number) => void
}

export default function Component({ todo, onToggleTodo }: Props) {
  return (
    <li>
      <button onClick={() => onToggleTodo(todo.id)} className='bg-transparent'>
        <span className={`${todo.completed ? 'text-green-500' : ''}`}>
          {todo.completed ? '✔︎' : '▫️'}
        </span>
        <span
          className={`${todo.completed ? 'text-gray-500 line-through' : ''}`}
        >
          {todo.text}
        </span>
      </button>
    </li>
  )
}
