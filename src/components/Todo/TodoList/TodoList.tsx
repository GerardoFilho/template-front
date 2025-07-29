import { useTodoStore } from "../../../store/useTodoStore";
import TodoItem from "../TodoItem/TodoItem";
import * as S from "./TodoList.style";

const TodoList = () => {
  const todos = useTodoStore((s) => s.todos);

  const orderedTodos = [...todos].sort(
    (a, b) => Number(a.done) - Number(b.done)
  );

  return (
    <S.ListWrapper>
      {orderedTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </S.ListWrapper>
  );
};

export default TodoList;
