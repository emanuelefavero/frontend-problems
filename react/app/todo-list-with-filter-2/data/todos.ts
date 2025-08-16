export type Todo = {
  id: number
  text: string
  completed: boolean
}

export const todos: Todo[] = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Clean the house', completed: true },
  { id: 3, text: 'Finish React project', completed: false },
]
