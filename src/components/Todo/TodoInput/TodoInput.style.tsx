import { styled } from "@stitches/react";

export const InputWrapper = styled("div", {
  display: "flex",
  padding: "1rem",
  backgroundColor: "gray",
  gap: "0.5rem",
});

export const Input = styled("input", {
  flex: 1,
  padding: "0.5rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
});

export const AddButton = styled("button", {
  backgroundColor: "#1a2e1f",
  border: "none",
  color: "white",
  padding: "0 1rem",
  borderRadius: "6px",
  cursor: "pointer",
});
