import { create } from "zustand";

export interface Todo {
  content: string;
  done: boolean;
  id: number;
}

export interface TodoListState {
  todoList: Todo[];
  add: (val: string) => void;
  ok: (id: number) => void;
  del: (id: number) => void;
}

export const useTodoListStore = create<TodoListState>((set) => ({
  todoList: JSON.parse(window.localStorage.getItem("todoList") as string) ?? [],
  add: (val: string) => {
    set((state) => {
      const todoList: Todo[] = [
        ...state.todoList,
        {
          content: val,
          done: false,
          id: new Date().getTime(),
        },
      ];
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      return {
        todoList,
      };
    });
  },
  ok: (id: number) => {
    set((state) => {
      state.todoList.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done;
        }
      });
      window.localStorage.setItem("todoList", JSON.stringify(state.todoList));
      return {
        todoList: state.todoList,
      };
    });
  },
  del: (id: number) => {
    set((state) => {
      const todoList: Todo[] = state.todoList.filter((todo) => todo.id !== id);
      window.localStorage.setItem("todoList", JSON.stringify(todoList));
      return {
        todoList,
      };
    });
  },
}));
