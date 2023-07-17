import React from 'react';

import {
  Box,
  Title,
  TextAreaBox,
  TextArea,
  Button,
} from './RecipePreparation.styled';

const RecipePreparationFields = ({ instructions, setInstructions }) => {
  const handleInstructionsChange = event => {
    const inputText = event.target.value;
    const instructionsArray = inputText.split('\n');
    setInstructions(instructionsArray);
  };

  return (
    <Box>
      <Title>Recipe Preparation</Title>
      <TextAreaBox>
        <TextArea
          value={instructions.join('\n')}
          onChange={handleInstructionsChange}
          placeholder="Enter recipe"
        />
        <Button type="submit">Add</Button>
      </TextAreaBox>
    </Box>
  );
};

export default RecipePreparationFields;
