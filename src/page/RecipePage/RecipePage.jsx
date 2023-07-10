import RecipeHero from 'components/Recipe/RecipeHero/RecipeHero';
import RecipeIngredients from 'components/Recipe/RecipeIngredients/RecipeIngredients';
import { recipeOne } from 'components/Recipe/RecipeIngredients/RecipeIngredients.styled';
import RecipeInstruction from 'components/Recipe/RecipeInstruction/RecipeInstruction';
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router';

const RecipePage = () => {
  // const dispatch = useDispatch();
  // const { _id } = useParams();
  // getFindRecipeById();

  const recipe = recipeOne;

  const { _id, title, description, time, instructions, thumb, ingredients } =
    recipe;

  return (
    <main>
      <RecipeHero
        time={time}
        title={title}
        description={description}
        id={_id}
      />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeInstruction instructions={instructions} thumb={thumb} />
    </main>
  );
};

export default RecipePage;
