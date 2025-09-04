import { styled } from "../../../styles/stitches.config";


export const Grid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 20,
    marginTop: '24px'
});
