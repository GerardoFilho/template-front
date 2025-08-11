import { create } from "zustand";
import { generateId } from "../utils/helpers";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  deleted: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  restoreTodo: (id: string) => Promise<void>;
}


export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: async (text) => {
    set((state) => ({
      todos: [...state.todos, { id: generateId(), text, completed: false, deleted: false }],
    }));
  },
  toggleTodo: async (id) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed, } : t
      ),
    }))
  },
  removeTodo: async (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, deleted: true } : t
      ),
    })),
  restoreTodo: async (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, deleted: false } : t
      ),
    })),
}));
