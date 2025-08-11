import { useState } from "react";
import { Button, Card, theme } from "cxt-design-system";
import TodoHeader from "../components/Todo/TodoHeader/TodoHeader";
import TodoInput from "../components/Todo/TodoInput/TodoInput";
import TodoList from "../components/Todo/TodoList/TodoList";
import { useTodoStore } from "../store/useTodoStore";
import { toast } from "react-toastify";
import { useKeyPress } from "../hooks/useKeyPress";

const TodoPage = () => {

  const [text, setText] = useState("");
  
  const addTodo = useTodoStore((s) => s.addTodo);
  
  
  const handleAdd = () => {
    if (text.trim().length > 0) {
      addTodo(text);
      setText("");
    }else{
      toast.info('Você não pode adicionar uma tarefa vazia');
    }
  };

  useKeyPress('Enter', handleAdd);



  return (
    <Card style={{ padding: 5, display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TodoHeader />
      <Card style={{ padding: 5, display: "flex", flexDirection: "row", gap: "1rem" }}>
        <TodoInput value={text} setValue={setText} />
        <Button  onClick={handleAdd}> <span style={{ fontSize: `${theme.typography.h5.fontSize}` }}>+</span> </Button>
      </Card>
      <TodoList />
    </Card>
  );
};

export default TodoPage;
