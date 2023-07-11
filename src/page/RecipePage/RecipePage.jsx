import RecipeHero from 'components/Recipe/RecipeHero/RecipeHero';
import RecipeIngradients from 'components/Recipe/RecipeIngredients/RecipeIngredients';
import RecipeInstruction from 'components/Recipe/RecipeInstruction/RecipeInstruction';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from 'redux/recipe/api';

const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);

  const { recipeId } = useParams();

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const recipe = await getRecipeById(recipeId);
        if (!recipe) {
          return;
        }
        setRecipe(recipe);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchRecipe();
  }, [recipeId]);

  const { _id, title, description, time, instructions, thumb, ingredients } =
    recipe;

  return (
    <div>
      <RecipeHero
        time={time}
        title={title}
        description={description}
        id={_id}
      />
      <RecipeIngradients ingredients={ingredients} />
      <RecipeInstruction instructions={instructions} thumb={thumb} />
    </div>
  );
};

export default RecipePage;
