import { todos } from './data/todos'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Todos from './Todos'

describe('Todos Component', () => {
  it('renders initial todos', () => {
    render(<Todos />)

    todos.forEach((todo) => {
      const todoElement = screen.getByTestId(`todo-${todo.id}`)
      expect(todoElement).toBeDefined()
      expect(todoElement.textContent).toContain(todo.text)
    })
  })
})
