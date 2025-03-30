import styled from "styled-components";

const DifficultyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const DifficultyLevel = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  background-color: ${({ level }) =>
    level === 0 ? "#ffcccc" : level === 1 ? "#ffd700" : "#ff5733"};
  color: ${({ level }) => (level === 3 ? "white" : "black")};
`;

const Difficulty = ({ level }) => {
  return (
    <DifficultyWrapper>
      <span>Difficulty:</span>
      <DifficultyLevel level={level}>
        {level === 0 ? "Easy" : level === 1 ? "Medium" : "Hard"}
      </DifficultyLevel>
    </DifficultyWrapper>
  );
};

export default Difficulty;
