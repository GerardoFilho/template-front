import { useEffect, useState } from "react";
import { useTodoStore } from "../../../store/useTodoStore";
import { Form, Input } from "./TodoForm.style";
import { toast } from "react-toastify";
import { useApiRequest } from "../../../hooks/useApiRequest";
import {Button} from 'cxt-design-system'

const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  const [, setIsLoadingPage] = useState(false);

  const { data, isSuccess, isPending } = useApiRequest({
    endpoint: '/todos',
    method: 'GET',
    key: ['todos'],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  const onLoading = async () => {
    setIsLoadingPage(true);
    if (isSuccess) {
      //TODO : Add todos to store
      data
    } else {
      toast.error('Ops, aconteceu algo inesperado, tente novamente');
    }
    setIsLoadingPage(false);
  }

  useEffect(() => {
    void onLoading();
  }, []);


  if(isPending) return <div>Carregando...</div>



  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <Button type="submit">Adicionar</Button>
      {/* <SubmitButton type="submit">Adicionar</SubmitButton> */}
    </Form>
  );
};

export default TodoForm;
