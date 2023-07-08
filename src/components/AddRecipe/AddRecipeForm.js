import React, { useState } from 'react';
import RecipeDescriptionFields from './RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields';

const AddRecipeForm = () => {
  const initialRecipeData = {
    photo: null,
    name: '',
    description: '',
    category: '',
    cookingTime: '',
    ingredients: [],
    preparation: [],
  };

  const [recipeData, setRecipeData] = useState(initialRecipeData);

  const handleInputChange = (name, value) => {
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(recipeData);
    // отправка на бекенд

    setRecipeData(initialRecipeData);
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleFormSubmit}>
        <RecipeDescriptionFields
          recipeData={recipeData}
          handleInputChange={handleInputChange}
        />
        <RecipeIngredientsFields
          ingredients={recipeData.ingredients}
          setIngredients={(updatedIngredients) =>
            setRecipeData((prevData) => ({
              ...prevData,
              ingredients: updatedIngredients,
            }))
          }
        />
        <RecipePreparationFields
          preparation={recipeData.preparation}
          setPreparation={(updatedPreparation) =>
            setRecipeData((prevData) => ({
              ...prevData,
              preparation: updatedPreparation,
            }))
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
