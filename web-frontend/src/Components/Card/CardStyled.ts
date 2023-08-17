import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
export const CardStyled = styled(Card)`
  height: 264px;
  width: 200px;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);
  .MuiCardMedia-root {
    height: 200px;
    width: 200px;
    background-position: initial;
  }
`;
export const TitleStyled = styled(Typography)`
  color: #4a4a4a;
  font-size: 12px;
  font-weight: bold;
  margin-right: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DescriptionStyled = styled(Typography)`
  color: #4a4a4a;
  font-size: 12px;
  font-weight: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RatingStyled = styled(Typography)`
  color: #9b9b9b;
  font-size: 12px;
  font-weight: normal;
`;
export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`;
export const WrapperContentStyled = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
