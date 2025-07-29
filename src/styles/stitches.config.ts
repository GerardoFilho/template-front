import { createStitches } from "@stitches/react";

export const { styled, theme, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      background: "#f0fdf4",
      card: "#ffffff",
      text: "#111827",
      primary: "#2563eb",
      primaryDark: "#1e40af",
      muted: "#6b7280",
      danger: "#e11d48",
      success: "#4ade80",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    background: "#111827",
    card: "#1f2937",
    text: "#f9fafb",
    primary: "#60a5fa",
    primaryDark: "#3b82f6",
    muted: "#9ca3af",
    danger: "#f87171",
    success: "#86efac",
  },
});
