import { styled } from "@stitches/react";

export const StyledButton = styled("button", {
  backgroundColor: "darkblue",
  color: "white",
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    backgroundColor: "black",
  },
});
