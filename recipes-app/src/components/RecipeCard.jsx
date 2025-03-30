// components/RecipeCard.js
import styled from "styled-components";
import Difficulty from "./Difficulty";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  text-align: center;
  padding: 15px;
  position: relative;
  border: ${({ hard }) => (hard ? "3px solid red" : "none")};
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

const Info = styled.p`
  font-size: 14px;
  color: gray;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card hard={recipe.difficulty === 3}>
      <Image src={recipe.image} alt={recipe.title} />
      <Title>{recipe.title}</Title>
      <Info>⏳ {recipe.time} | 🍽 {recipe.servings} servings | 🔥 {recipe.calories} calories</Info>
      <Difficulty level={recipe.difficulty} />
    </Card>
  );
};

export default RecipeCard;
