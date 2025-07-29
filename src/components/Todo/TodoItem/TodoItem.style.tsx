import { styled } from "@stitches/react";

export const Item = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem",
  borderRadius: "8px",
  backgroundColor: "white",
  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  marginBottom: "0.5rem",
  variants: {
    done: {
      true: {
        backgroundColor: "gray",
        textDecoration: "line-through",
        color: "red",
      },
      false: {
        color: "#1f2937",
      },
    },
  },
});

export const Text = styled("span", {
  flex: 1,
  marginLeft: "0.75rem",
});

export const Checkbox = styled("input", {
  cursor: "pointer",
});

export const RemoveButton = styled("button", {
  color: "#e11d48",
  fontSize: "0.875rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  marginLeft: "1rem",
  "&:hover": {
    textDecoration: "underline",
  },
});
