'use client'

import { useState } from 'react'
import type { Todo, Filter } from './types/todos'
import { todos as initialTodos } from './data/todos'

// TODO setup unit testing for this component

export default function Component() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  // Add a new todo
  const addTodo = () => {
    if (!newTodo) alert('Please enter a todo')

    setTodos((prev) => [
      {
        id: todos.length + 1,
        text: newTodo,
        completed: false,
      },
      ...prev,
    ])
  }

  // Toggle the completion status of a todo
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      })
    )
  }

  return (
    <>
      <div>
        {/* New Todo */}
        <label htmlFor='newTodo'>New Todo:</label>
        <input
          type='text'
          id='newTodo'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add Todo</button>

        <div>
          {/* Filter */}
          <select
            onChange={(e) => setFilter(e.target.value as Filter)}
            className='text-black'
            value={filter}
          >
            <option value='all'>All</option>
            <option value='active'>Active</option>
            <option value='completed'>Completed</option>
          </select>

          {/* Todos */}
          <ul>
            {filteredTodos.map((todo, index) => (
              <li
                key={todo.id}
                className={`${todo.completed && 'line-through opacity-70'}`}
              >
                {index + 1}
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
