'use client'

import { useState } from 'react'
import TodoFilter from './TodoFilter'
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
      <TodoFilter filter={filter} setFilter={setFilter} />

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
