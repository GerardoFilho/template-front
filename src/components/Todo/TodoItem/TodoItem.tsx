import { useTodoStore, type Todo } from "../../../store/useTodoStore";
import * as S from "./TodoItem.style";

const TodoItem = ({ id, text, done }: Todo) => {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const removeTodo = useTodoStore((s) => s.removeTodo);

  return (
    <S.Item done={done}>
      <S.Checkbox
        type="checkbox"
        checked={done}
        onChange={() => toggleTodo(id)}
      />
      <S.Text>{text}</S.Text>
      <S.RemoveButton onClick={() => removeTodo(id)}>Remover</S.RemoveButton>
    </S.Item>
  );
};

export default TodoItem;
