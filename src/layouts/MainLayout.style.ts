import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

export const Wrapper = styled("div", {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "$background",
  });
  
  export const Header = styled("header", {
    backgroundColor: "$card",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
    padding: "1rem",
    display: "flex",
    gap: "1.5rem",
  });
  
  export const NavLink = styled(Link, {
    color: "$primary",
    fontWeight: "bold",
    textDecoration: "none",
  
    "&:hover": {
      textDecoration: "underline",
    },
  });
  
  export const Main = styled("main", {
    flex: 1,
    padding: "1.5rem",
  });