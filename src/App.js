import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fdfbe2; 
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
  }
`;

const DifficultyPanel = styled.div`
  background: white;
  border-radius: 18px;
  padding: 12px;
  margin-top: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`;

const DifficultyLabel = styled.p`
  font-weight: 800;
  font-size: 12px;
  margin: 0 0 8px 0;
  color: #333;
`;

const BadgeGroup = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${(props) => (props.active ? "#f56a6a" : "#fffbe6")};
  color: ${(props) => (props.active ? "white" : "#d4ccaf")};
  transition: all 0.2s ease;
`;

const Difficulty = ({ level }) => (
  <DifficultyPanel>
    <DifficultyLabel>Difficulty</DifficultyLabel>
    <BadgeGroup>
      <Badge active={level === 0}>Easy</Badge>
      <Badge active={level === 1}>Medium</Badge>
      <Badge active={level === 3}>Hard</Badge>
    </BadgeGroup>
  </DifficultyPanel>
);

const Card = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  margin: 12px 0;
  color: #1a1a1a;
`;

const StatsBar = styled.div`
  background: white;
  border-radius: 25px;
  padding: 8px 10px;
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  font-weight: 600;
  color: #888;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`;

const ListContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const recipes = [
  {
    id: 1,
    name: "Smoked salmon burger",
    time: 20,
    servings: 6,
    calories: 210,
    difficulty: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKGpBUDsaX3puHPn0p1F6xZhMp_2O4S-5vQ&s",
  },
  {
    id: 2,
    name: "Tomatoes With Creamy Feta",
    time: 15,
    servings: 3,
    calories: 600,
    difficulty: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1vB_SH1sgb2OkyfX6m_TEwgYY7QZESSUxQ&s",
  },
  {
    id: 3,
    name: "Spicy potato salad",
    time: 30,
    servings: 2,
    calories: 320,
    difficulty: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iewN8aOPZisiwBAM6Dfl9e9_FtPXntQ4Sg&s",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    time: 40,
    servings: 4,
    calories: 700,
    difficulty: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFVdYlip-rdgeDfGlYLyhgfo3KDi6jfv59Q&s",
  },
];

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ListContainer>
        {recipes.map((recipe) => (
          <Card key={recipe.id} isHard={recipe.difficulty === 3}>
            <Image src={recipe.image} alt={recipe.name} />
            <Title>{recipe.name}</Title>
            <StatsBar>
              <span>⏱ {recipe.time} min</span>
              <span>🍴 {recipe.servings} servings</span>
              <span>📊 {recipe.calories} calories</span>
            </StatsBar>
            <Difficulty level={recipe.difficulty} />
          </Card>
        ))}
      </ListContainer>
    </>
  );
}
