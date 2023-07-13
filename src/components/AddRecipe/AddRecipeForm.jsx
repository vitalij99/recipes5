import Container from 'components/Container/Container';
import React, { useState } from 'react';
import { ContainerAddRecipe } from './AddRecipe.styled';
// import PopularRecipe from './PopularRecipe/PopularRecipe';
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
    setRecipeData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(recipeData);
    // отправка на бекенд

    setRecipeData(initialRecipeData);
  };

  return (

    <Container>
      <ContainerAddRecipe>
       <form onSubmit={handleFormSubmit}>
          <RecipeDescriptionFields
            recipeData={recipeData}
            handleInputChange={handleInputChange}
          />
          <RecipeIngredientsFields
            ingredients={recipeData.ingredients}
            setIngredients={updatedIngredients =>
              setRecipeData(prevData => ({
                ...prevData,
                ingredients: updatedIngredients,
              }))
            }
          />
          <RecipePreparationFields
            preparation={recipeData.preparation}
            setPreparation={updatedPreparation =>
              setRecipeData(prevData => ({
                ...prevData,
                preparation: updatedPreparation,
              }))
            }
          />
        </form>
        {/* <PopularRecipe /> */}
      </ContainerAddRecipe>
    </Container>

  );
};

export default AddRecipeForm;
