import React from 'react';
import { TextArea, Title } from './RecipePreparation.styled';

const RecipePreparationFields = ({ preparation, setPreparation }) => {
  const handlePreparationChange = event => {
    const inputText = event.target.value;
    const preparationArray = inputText.split('\n');
    setPreparation(preparationArray);
  };

  return (
    <>
      <Title>Recipe Preparation</Title>
      <TextArea
        value={preparation.join('\n')}
        onChange={handlePreparationChange}
        placeholder="Enter recipe"
      />
    </>
  );
};

export default RecipePreparationFields;
