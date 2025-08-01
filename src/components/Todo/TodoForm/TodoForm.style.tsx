import { styled } from "@stitches/react";

export const Form = styled("form", {
  display: "flex",
  gap: "0.5rem",
  marginBottom: "1rem",
});

export const Input = styled("input", {
  flex: 1,
  padding: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "1rem",
});

export const SubmitButton = styled("button", {
  backgroundColor: "$primary",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.2s ease",
  "&:hover": {
    backgroundColor: "$primaryDark",
  },
});
