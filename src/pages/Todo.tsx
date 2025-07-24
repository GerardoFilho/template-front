import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { useTodoStore } from "../store/useTodoStore";

const TodoPage = () => {
  const todos = useTodoStore((s) => s.todos);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Minha Lista de Tarefas</h1>
      <TodoForm />
      {todos.length === 0 && (
        <p className="text-gray-500">Nenhuma tarefa ainda</p>
      )}
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoPage;
