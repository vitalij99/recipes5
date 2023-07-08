import React from 'react';

const RecipePreparationFields = ({ preparation, setPreparation }) => {
  const handlePreparationChange = (event) => {
    const inputText = event.target.value;
    const preparationArray = inputText.split('\n');
    setPreparation(preparationArray);
  };

  return (
    <div>
      <h3>Recipe Preparation</h3>
      <textarea
        value={preparation.join('\n')}
        onChange={handlePreparationChange}
        placeholder="Enter recipe"
      />
    </div>
  );
};

export default RecipePreparationFields;
