import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import RecipeCard from "./components/RecipeCard";
import styled from "styled-components";

const recipes = [
  {
    title: "Smoked salmon burger",
    image: "https://source.unsplash.com/250x150/?burger",
    time: "20 min",
    servings: 6,
    calories: 210,
    difficulty: 0,
  },
  {
    title: "Tomatoes With Creamy Feta",
    image: "https://source.unsplash.com/250x150/?salad",
    time: "15 min",
    servings: 3,
    calories: 600,
    difficulty: 1,
  },
  {
    title: "Spicy potato salad",
    image: "https://source.unsplash.com/250x150/?potato",
    time: "30 min",
    servings: 2,
    calories: 320,
    difficulty: 1,
  },
  {
    title: "Chicken Biryani",
    image: "https://source.unsplash.com/250x150/?biryani",
    time: "40 min",
    servings: 4,
    calories: 700,
    difficulty: 3,
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1 style={{ textAlign: "center" }}>Список рецептів</h1>
      <Container>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </Container>
    </>
  );
};

export default App;
