import * as S from "./TodoItem.style";
import { Button, Card, IconeFa } from "cxt-design-system";
import { useTodoStore, type Todo } from "../../../store/useTodoStore";

const TodoItem = ({ id, text, completed, deleted }: Todo) => {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const removeTodo = useTodoStore((s) => s.removeTodo);
  const restoreTodo = useTodoStore((s) => s.restoreTodo);

  return (
    <Card sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, padding: 1 }}>
      <S.Checkbox
        type="checkbox"
        disabled={deleted}
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, padding: 1 }}>
        <S.Text complete={deleted}>{text}</S.Text>
        <S.Text style={{ border: '1px red solid' }}
          complete={deleted}>{text}</S.Text>
      </div>
      {
        deleted ?
          <Button color="success" size="small" sx={{ height: "2rem" }} onClick={() => restoreTodo(id)}><IconeFa.FaUndoAlt /></Button>
          :
          <Button disabled={deleted} color="error" size="small" sx={{ height: "2rem" }} onClick={() => removeTodo(id)}><IconeFa.FaTrashAlt /></Button>
      }

    </Card >
  );
};

export default TodoItem;
