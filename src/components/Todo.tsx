import { Button } from "./Button";
import { useTodoListStore } from "../store/TodoList";
import type { Todo as TodoType } from "../store/TodoList";

export default function ToDo(props: { todo: TodoType }) {
  const { todo } = props;
  const { ok, del } = useTodoListStore();
  return (
    <div
      className={`flex items-center justify-between px-[10px] py-[5px] border rounded-lg text-white mb-[10px] ${
        todo.done ? "bg-green-500" : "bg-orange-300"
      }`}
    >
      <div className={`font-bold text-14px ${todo.done && "line-through"}`}>
        {todo.content}
      </div>
      <div className="flex">
        <Button
          onClick={() => {
            ok(todo.id);
          }}
          className={`!w-[50px] ${
            todo.done ? "!bg-gray-300" : "!bg-green-500"
          }`}
        >
          {todo.done ? "待办" : "完成"}
        </Button>
        <Button
          onClick={() => {
            del(todo.id);
          }}
          className="!bg-red-500 !w-[50px]"
        >
          删除
        </Button>
      </div>
    </div>
  );
}
