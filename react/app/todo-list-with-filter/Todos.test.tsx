import { todos } from './data/todos'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Todos from './Todos'

describe('Todos Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders initial todos', () => {
    render(<Todos />)

    todos.forEach((todo) => {
      const todoElement = screen.getByTestId(`todo-${todo.id}`)
      expect(todoElement).toBeDefined()
      expect(todoElement.textContent).toContain(todo.text)
    })
  })

  it('adds a new todo', () => {
    render(<Todos />)

    const input = screen.getByPlaceholderText('Enter a new todo')
    const button = screen.getByText('Add Todo')

    const newTodoText = 'New Todo'

    fireEvent.change(input, { target: { value: newTodoText } })
    fireEvent.click(button)

    const newTodoElement = screen.getByTestId(`todo-${todos.length + 1}`)
    expect(newTodoElement).toBeDefined()
    expect(newTodoElement.textContent).toContain(newTodoText)
  })
})
