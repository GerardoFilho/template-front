import type { Todo } from "../store/useTodoStore";
import { useTodoStore } from "../store/useTodoStore";

const TodoItem = ({ id, text, done }: Todo) => {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const removeTodo = useTodoStore((s) => s.removeTodo);

  return (
    <div className="flex justify-between items-center border p-2 rounded mb-2">
      <div
        className={`flex-1 cursor-pointer ${
          done ? "line-through text-gray-500" : ""
        }`}
        onClick={() => toggleTodo(id)}
      >
        {text}
      </div>
      <button onClick={() => removeTodo(id)} className="text-red-500 text-sm">
        Remover
      </button>
    </div>
  );
};

export default TodoItem;
