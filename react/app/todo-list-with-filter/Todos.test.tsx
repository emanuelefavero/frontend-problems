import { todos } from './data/todos'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Todos from './Todos'

// * Utils
function renderTodos() {
  render(<Todos />)
}

// * Tests
describe('Todos Component', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders initial todos', () => {
    renderTodos()

    todos.forEach((todo) => {
      const todoElement = screen.getByTestId(`todo-${todo.id}`)
      expect(todoElement).toBeDefined()
      expect(todoElement.textContent).toContain(todo.text)
    })
  })

  it('adds a new todo', () => {
    renderTodos()

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
    renderTodos()

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

    renderTodos()

    const button = screen.getByText('Add Todo')

    fireEvent.click(button)

    expect(alertMock).toHaveBeenCalledWith('Please enter a todo')
    alertMock.mockRestore() // Restore the original alert function
  })

  it('toggles a todo completion status when its checkbox is clicked', () => {
    renderTodos()

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

  it('filters todos to show only active todos when active option is selected', () => {
    renderTodos()

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'active' } })

    // Get all active todo items (the ones without the line-through class)
    const todoElements = screen.getAllByTestId(/todo-/)
    const activeTodos = todoElements.filter(
      (el) => !el.className.includes('line-through')
    )
    expect(activeTodos.length).toBeGreaterThan(0)
  })

  it('filters todos to show only completed todos when completed option is selected', () => {
    renderTodos()

    // First, toggle the first todo to completed
    const todoElement = screen.getByTestId(`todo-${todos[0].id}`)
    const checkbox = todoElement.querySelector('input[type="checkbox"]')
    expect(checkbox).toBeDefined()
    fireEvent.click(checkbox!)

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'completed' } })

    // Get all completed todo items (the ones with the line-through class)
    const todoElements = screen.getAllByTestId(/todo-/)
    const completedTodos = todoElements.filter((el) =>
      el.className.includes('line-through')
    )

    // Expect at least one completed todo to be present
    expect(completedTodos.length).toBeGreaterThan(0)
  })

  it('shows all todos when all option is selected', () => {
    renderTodos()

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'all' } })

    // Get all todo items
    const todoElements = screen.getAllByTestId(/todo-/)
    expect(todoElements.length).toBe(todos.length)
  })
})
