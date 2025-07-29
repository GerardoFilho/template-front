import { useState } from "react";
import { useTodoStore } from "../../store/useTodoStore";
import { Form, Input, SubmitButton } from "./TodoForm.style";

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
    <Form onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <SubmitButton type="submit">Adicionar</SubmitButton>
    </Form>
  );
};

export default TodoForm;
