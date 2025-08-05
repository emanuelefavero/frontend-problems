import { todos } from './data/todos'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Todos from './Todos'
import type { Todo, Filter } from './types/todos'

// * Utils
function renderTodos() {
  render(<Todos />)
}

function toggleTodo(id: number) {
  const todoElement = screen.getByTestId(`todo-${id}`)
  const checkbox = todoElement.querySelector('input[type="checkbox"]')
  fireEvent.click(checkbox!)
  return todoElement
}

function selectFilter(value: Filter) {
  const select = screen.getByRole('combobox')
  fireEvent.change(select, { target: { value } })
}

function getTodoElements() {
  return screen.getAllByTestId(/todo-/)
}

function getActiveTodos() {
  // Filter out todos that are not completed (i.e., do not have the line-through class)
  return getTodoElements().filter(
    (el) => !el.className.includes('line-through')
  )
}

function getCompletedTodos() {
  return getTodoElements().filter((el) => el.className.includes('line-through'))
}

// * Tests
describe('Todos Component', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders initial todos', () => {
    renderTodos()

    // Check if the initial todos are rendered
    todos.forEach((todo: Todo) => {
      const todoElement = screen.getByTestId(`todo-${todo.id}`)
      expect(todoElement).toBeDefined()
      expect(todoElement.textContent).toContain(todo.text)
    })
  })

  it('adds a new todo', () => {
    renderTodos()

    // Simulate adding a new todo
    const input = screen.getByPlaceholderText('Enter a new todo')
    const button = screen.getByText('Add Todo')
    const newTodoText = 'New Todo'
    fireEvent.change(input, { target: { value: newTodoText } })
    fireEvent.click(button)

    // Check if the new todo is added
    const newTodoElement = screen.getByTestId(`todo-${todos.length + 1}`)
    expect(newTodoElement).toBeDefined()
    expect(newTodoElement.textContent).toContain(newTodoText)
  })

  it('adds a new todo when enter is pressed in the input', () => {
    renderTodos()

    // Simulate pressing Enter in the input field when adding a new todo
    const input = screen.getByPlaceholderText('Enter a new todo')
    const newTodoText = 'New Todo with Enter'
    fireEvent.change(input, { target: { value: newTodoText } })
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' })

    // Check if the new todo is added
    const newTodoElement = screen.getByTestId(`todo-${todos.length + 1}`)
    expect(newTodoElement).toBeDefined()
    expect(newTodoElement.textContent).toContain(newTodoText)
  })

  it('shows an alert if the new todo text is empty', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    renderTodos()

    // Try to add an empty todo
    const button = screen.getByText('Add Todo')
    fireEvent.click(button)

    // Expect the alert to be called with the correct message
    expect(alertMock).toHaveBeenCalledWith('Please enter a todo')
    alertMock.mockRestore() // Restore the original alert function
  })

  it('toggles a todo completion status when its checkbox is clicked', () => {
    renderTodos()

    // After toggling, it should have the line-through class
    const todoElement = toggleTodo(todos[0].id)
    expect(todoElement.className).toContain('line-through')

    // After toggling again, it should not have the line-through class
    toggleTodo(todos[0].id)
    expect(todoElement.className).not.toContain('line-through')
  })

  it('filters todos to show only active todos when active option is selected', () => {
    renderTodos()
    selectFilter('active')

    // Get all active todo items (the ones without the line-through class)
    const activeTodos = getActiveTodos()

    // Expect at least one active todo to be present
    expect(activeTodos.length).toBeGreaterThan(0)
  })

  it('filters todos to show only completed todos when completed option is selected', () => {
    renderTodos()
    toggleTodo(todos[0].id) // Toggle the first todo to completed
    selectFilter('completed')

    // Get all completed todo items (the ones with the line-through class)
    const completedTodos = getCompletedTodos()

    // Expect at least one completed todo to be present
    expect(completedTodos.length).toBeGreaterThan(0)
  })

  it('shows all todos when all option is selected', () => {
    renderTodos()
    selectFilter('all')

    // Get all todo items
    const todoElements = getTodoElements()

    // Expect the number of todo elements to match the initial todos length
    expect(todoElements.length).toBe(todos.length)
  })
})
