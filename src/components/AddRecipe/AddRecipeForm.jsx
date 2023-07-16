import Container from 'components/Container/Container';
import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ContainerAddRecipe, Form } from './AddRecipe.styled';
import PopularRecipe from './PopularRecipe/PopularRecipe';
import RecipeDescriptionFields from './RecipeDescription/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredients/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparation/RecipePreparationFields';
import onValidationForm from './validationForm';
import { Link } from 'react-router-dom';

const checkScreenWidth = () => {
  return window.innerWidth;
};

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

  const handleFormSubmit = async event => {
    event.preventDefault();
    const validatedData = onValidationForm(recipeData);
    if (validatedData) {
      console.log(validatedData);
      try {
        Notify.success('Recipe Added');
        setRecipeData(initialRecipeData);
      } catch (error) {
        console.error('Error while adding the recipe:', error);
      }
    }
  };

  const [screenWidth, setScreenWidth] = useState(checkScreenWidth());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(checkScreenWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <ContainerAddRecipe>
        <Form onSubmit={handleFormSubmit}>
          <RecipeDescriptionFields
            recipeData={recipeData}
            handleInputChange={handleInputChange}
          />
          {screenWidth >= 1440 ? <PopularRecipe /> : null}
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
          {screenWidth < 1440 ? <PopularRecipe /> : null}
          <Link to={'/my'}></Link>
        </Form>
      </ContainerAddRecipe>
    </Container>
  );
};

export default AddRecipeForm;
