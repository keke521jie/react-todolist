import { useTodoListStore } from "../store/TodoList";
import { Input } from "./Input";
import Todo from "./Todo";
import type { Todo as TodoType } from "../store/TodoList";
import { Empty } from "./Empty";

export function ToDo() {
  const { todoList } = useTodoListStore();
  return (
    <div className="flex flex-col p-[20px]">
      {/* <div className="text-[20px] text-center h-[50px] flex items-center justify-center font-bold border border-indigo-600 rounded-md">todo</div> */}
      <Input></Input>
      <div className="flex flex-col">
        {todoList.map((todo: TodoType) => {
          return <Todo todo={todo} key={todo.id}></Todo>;
        })}
        {todoList.length < 1 && <Empty>暂无待办</Empty>}
      </div>
    </div>
  );
}
