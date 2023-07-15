import React from 'react';

import {
  Box,
  Title,
  TextAreaBox,
  TextArea,
  Button,
} from './RecipePreparation.styled';

const RecipePreparationFields = ({ preparation, setPreparation }) => {
  const handlePreparationChange = event => {
    const inputText = event.target.value;
    const preparationArray = inputText.split('\n');
    setPreparation(preparationArray);
  };

  return (
    <Box>
      <Title>Recipe Preparation</Title>
      <TextAreaBox>
        <TextArea
          value={preparation.join('\n')}
          onChange={handlePreparationChange}
          placeholder="Enter recipe"
        />
        <Button type="submit">Add</Button>
      </TextAreaBox>
    </Box>
  );
};

export default RecipePreparationFields;
