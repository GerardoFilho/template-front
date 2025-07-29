import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";

const TodoPage = () => {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoPage;
