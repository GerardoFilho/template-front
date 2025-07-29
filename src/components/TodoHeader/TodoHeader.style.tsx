import { styled } from "@stitches/react";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "black",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  gap: "0.5rem",
});

export const Highlight = styled("span", {
  color: "blue",
  fontStyle: "italic",
});
