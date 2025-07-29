import { useState } from "react";
import * as S from "./TodoInput.style";
import { useTodoStore } from "../../../store/useTodoStore";

const TodoInput = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((s) => s.addTodo);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <S.InputWrapper>
      <S.Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <S.AddButton onClick={handleAdd}>+</S.AddButton>
    </S.InputWrapper>
  );
};

export default TodoInput;
