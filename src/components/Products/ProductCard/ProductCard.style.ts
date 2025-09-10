import { styled } from "../../../styles/stitches.config";


export const Card = styled("div", {
    border: "1px solid $text",
    padding: 16,
    borderRadius: 8,
    background: "lightsteelblue",
    cursor: "pointer",
    transition: 'background-color 0.3s ease', 

      '&:hover': {
        backgroundColor: 'lightblue',
      },
});

export const Image = styled("img", {
    width: 100,
    height: 100,
    objectFit: "contain",
    marginBottom: 12,
});