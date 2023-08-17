import {
  CardContentStyled,
  CardStyled,
  DescriptionStyled,
  RatingStyled,
  TitleStyled,
  WrapperContentStyled,
} from "./CardStyled";
import CardMedia from "@mui/material/CardMedia";

interface Props {
  title: string;
  description: string | null;
  rating: number;
  img: string;
  id: string;
}

const Card = ({ title, description, rating, id, img }: Props) => {
  return (
    <CardStyled variant="outlined" id={id}>
      <CardMedia image={img} title={title} />
      <CardContentStyled>
        <WrapperContentStyled>
          <TitleStyled>{title}</TitleStyled>
          <RatingStyled>{rating}</RatingStyled>
        </WrapperContentStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
      </CardContentStyled>
    </CardStyled>
  );
};

export default Card;
