import { Card, theme } from "cxt-design-system";

const TodoHeader = () => (
  <Card sx={{
    display: "flex",
    alignItems: "center",
    gap: 2, as: "header", padding: "1rem", backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`, fontSize: `${theme.typography.h6.fontSize}`, fontWeight: "bold"
  }}>
    <h2>Todo</h2>
  </Card>
);

export default TodoHeader;
