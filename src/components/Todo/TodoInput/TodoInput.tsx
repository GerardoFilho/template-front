import { Button, Card, Input } from "cxt-design-system";
import { memo } from "react";

type Props = {
  value: string;
  setValue: (e:string) => void;
}
const TodoInput = ({setValue,value}: Props) => {

  return (
      <Input
        value={value}
        width={'100%'}
        onChange={(e) => setValue(e)}
        placeholder="Adicione uma tarefa"
      />
  );
};

export default memo(TodoInput);
