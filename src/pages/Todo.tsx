import TodoHeader from "../components/Todo/TodoHeader/TodoHeader";
import TodoInput from "../components/Todo/TodoInput/TodoInput";
import TodoList from "../components/Todo/TodoList/TodoList";

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
