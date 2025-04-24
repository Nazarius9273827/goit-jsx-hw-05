import React from "react";
import GlobalStyles from './GlobalStyles.jsx';
import RecipeCard from './components/RecipeCard.jsx';
import styled from "styled-components";

const recipes = [
  {
    title: "Smoked salmon burger",
    image: "https://kpthai.com/frontend/images/news/I0000014.jpg",
    time: "20 min",
    servings: 6,
    calories: 210,
    difficulty: 0,
  },
  {
    title: "Tomatoes With Creamy Feta",
    image: "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2560%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg",
    time: "15 min",
    servings: 3,
    calories: 600,
    difficulty: 1,
  },
  {
    title: "Spicy potato salad",
    image: "https://mccormick.widen.net/content/uvjk9yurf1/original/spicy_potato_salad_637390546085236844_800x800.jpg",
    time: "30 min",
    servings: 2,
    calories: 320,
    difficulty: 1,
  },
  {
    title: "Chicken Biryani",
    image: "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg",
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
