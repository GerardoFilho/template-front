import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Adicionar
      </button>
    </form>
  );
};

export default TodoForm;
