'use client'

// * Fix the mutations using non-mutative methods
// In this example, all of the event handlers in App.js use mutation. As a result, editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:

import { useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

let nextId = 3
const initialTodos: Todo[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
]

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos)

  function handleAddTodo(title: string) {
    if (!title) return

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: nextId++,
        title,
        done: false,
      },
    ])
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo
        }

        return todo
      })
    )
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== todoId
      })
    )
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}
