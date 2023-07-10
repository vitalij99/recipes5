import ContainerMedia from 'components/Container/Container.style';
import React, { useState } from 'react';
import { ContainedAddRecipe } from './AddRecipe.styled';
import PopularRecipe from './PopularRecipe/PopularRecipe';
import RecipeDescriptionFields from './RecipeDescription/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredients/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparation/RecipePreparationFields';

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
    
      <ContainerMedia>
        <ContainedAddRecipe>
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
      {/* <PopularRecipe /> */}
    </ContainedAddRecipe>
    </ContainerMedia>
  );
};

export default AddRecipeForm;