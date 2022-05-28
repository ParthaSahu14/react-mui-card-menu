import { styled } from "@mui/material/styles";
import * as React from "react";

interface IItemProps{
    text: string;
}

const ItemStyled = styled("div")(({ theme }) => ({
    backgroundColor: "lightgreen",
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflowY: "auto",
    height: "300px",
    minWidth: "300px",
  }));

const Item: React.FC<IItemProps> = ({text}) => {

    return (
        <>
        <ItemStyled>
            {text}
        </ItemStyled>
        </>
    );
}

export default Item;