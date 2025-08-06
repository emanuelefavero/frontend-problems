import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
