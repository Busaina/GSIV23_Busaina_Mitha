import { styled } from "@mui/material/styles";

export const ContainerStyled = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 64px;
  padding: 4px;
  a {
    text-decoration: none !important ;
  }
`;
export const Pagination = styled("div")`
  button {
    margin: 2px;
  }
  display: flex;
  justify-content: center;
`;
