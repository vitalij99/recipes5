import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import Loader from 'components/Loader/Loader';
import RecipeHero from 'components/Recipe/RecipeHero/RecipeHero';
import RecipeIngredients from 'components/Recipe/RecipeIngredients/RecipeIngredients';
import RecipeInstruction from 'components/Recipe/RecipeInstruction/RecipeInstruction';
import { getRecipeById } from 'redux/recipe/api';

const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setIsLoading(true);
        const recipe = await getRecipeById(recipeId);
        if (!recipe) {
          return;
        }
        setRecipe(recipe);
        setIsLoading(false);
      } catch (err) {
        Notify.failure('Ingredient added on shoppingList');
      }
    }
    fetchRecipe();
  }, [recipeId]);

  const { _id, title, description, time, instructions, thumb, ingredients } =
    recipe;

  return (
    <>
      {isLoading && <Loader />}
      <RecipeHero
        time={time}
        title={title}
        description={description}
        id={_id}
        recipe={recipe}
      />
      <RecipeIngredients ingredients={ingredients} recipeId={recipeId} />
      <RecipeInstruction instructions={instructions} thumb={thumb} />
    </>
  );
};

export default RecipePage;
