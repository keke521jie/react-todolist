import { useState } from "react";
import { Button } from "./Button";
import { useTodoListStore } from "../store/TodoList";

export function Input() {
  const [todo, setTodo] = useState("");
  const { add } = useTodoListStore();
  const handleAdd = (todo: string) => {
    if (typeof todo === "number" || todo.trim() === "") {
      alert("输入不能是纯数字和空！！！");
      return;
    }
    add(todo);
    setTodo("");
  };
  return (
    <div className="flex border border-[#d9d9d9] my-[10px] rounded-md px-[5px] items-center justify-between w-[100%]">
      <input
        type="text"
        className="pl-[10px] list-none outline-none w-[100%]"
        placeholder="请输入任务！"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={() => handleAdd(todo)} className="my-[5px]">
        添加
      </Button>
    </div>
  );
}
