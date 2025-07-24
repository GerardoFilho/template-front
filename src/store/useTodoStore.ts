import { create } from "zustand";

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), text, done: false },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
