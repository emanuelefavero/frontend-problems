'use client'

import { useState } from 'react'
import { todos as initialTodos } from './data/todos'
import type { Filter, Todo } from './types/todos'

export default function Component() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [filter, setFilter] = useState<Filter>('all')
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    else if (filter === 'incomplete') return !todo.completed
    else return todo
  })

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      }),
    )
  }

  if (!todos) return null

  return (
    <>
      <h2 className='mb-4 text-2xl font-semibold'>Todo List</h2>

      {/* Filter buttons */}
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

      {/* Todos */}
      <ul>
        {filteredTodos.map((todo: Todo) => (
          <li key={`todo-${todo.id}`}>
            <button
              onClick={() => toggleTodo(todo.id)}
              className='bg-transparent'
            >
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
        ))}
      </ul>
    </>
  )
}
