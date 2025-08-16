'use client'

import { useState } from 'react'
import TodoFilter from './TodoFilter'
import TodoItem from './TodoItem'
import { todos as initialTodos } from './data/todos'
import type { Filter, Todo } from './types/todos'

export default function Component() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [filter, setFilter] = useState<Filter>('all')

  // Calculate filtered todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'completed':
        return todo.completed
      case 'incomplete':
        return !todo.completed
      default:
        return true
    }
  })

  // Handle toggling a todo's completion status
  const handleToggleTodo = (id: number) => {
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
          <TodoItem
            key={`todo-${todo.id}`}
            todo={todo}
            onToggleTodo={handleToggleTodo}
          />
        ))}
      </ul>
    </>
  )
}
