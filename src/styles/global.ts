import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "$background",
    color: "$text",
  },
});
