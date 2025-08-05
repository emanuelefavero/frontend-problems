import { todos } from './data/todos'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Todos from './Todos'

describe('Todos Component', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
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

  it('adds a new todo when enter is pressed in the input', () => {
    render(<Todos />)

    const input = screen.getByPlaceholderText('Enter a new todo')

    const newTodoText = 'New Todo with Enter'

    fireEvent.change(input, { target: { value: newTodoText } })
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' })

    const newTodoElement = screen.getByTestId(`todo-${todos.length + 1}`)
    expect(newTodoElement).toBeDefined()
    expect(newTodoElement.textContent).toContain(newTodoText)
  })

  it('shows an alert if the new todo text is empty', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(<Todos />)

    const button = screen.getByText('Add Todo')

    fireEvent.click(button)

    expect(alertMock).toHaveBeenCalledWith('Please enter a todo')
    alertMock.mockRestore() // Restore the original alert function
  })

  it('toggles a todo completion status when its checkbox is clicked', () => {
    render(<Todos />)

    const todoElement = screen.getByTestId(`todo-${todos[0].id}`)
    const checkbox = todoElement.querySelector('input[type="checkbox"]')

    expect(checkbox).toBeDefined()

    // After toggling, it should have the line-through class
    fireEvent.click(checkbox!)
    expect(todoElement.className).toContain('line-through')

    // After toggling again, it should not have the line-through class
    fireEvent.click(checkbox!)
    expect(todoElement.className).not.toContain('line-through')
  })
})
