import Container from 'components/Container/Container';
import {
  HeroBtn,
  HeroDescr,
  HeroSvg,
  HeroTime,
  HeroTimeBlock,
  HeroTitle,
  RecipeHeroWrapper,
} from './RecipeHero.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteList } from 'redux/recipe/recipeSelector';
import { useState } from 'react';
import {
  addRecipeToFavorite,
  removeRecipeFromFavorit,
} from 'redux/recipe/recipeSlice';
import PresentModal from '../PresentModal/PresentModal';

function RecipeHero({ time, title, description, id }) {
  const [event, setEvent] = useState(null);

  const favorites = useSelector(selectFavoriteList);

  const [recipeOnFavorite, setRecipeOnFavorite] = useState(() =>
    favorites.some(val => val.id === id)
  );

  const dispatch = useDispatch();

  const handleFavoriteBtn = () => {
    if (favorites.length === 0) {
      setEvent('firstRecipeOnFavorite');
    }
    if (favorites.length === 9) {
      setEvent('tenRecipesOnFavorite');
    }
    const recipeId = { id };
    if (!recipeOnFavorite) {
      dispatch(addRecipeToFavorite(recipeId));
      setRecipeOnFavorite(!recipeOnFavorite);
    } else {
      dispatch(removeRecipeFromFavorit(recipeId));
      setRecipeOnFavorite(!recipeOnFavorite);
    }
  };

  return (
    <>
      {event === 'firstRecipeOnFavorite' && (
        <PresentModal event={event} onClose={true} />
      )}
      {event === 'tenRecipesOnFavorite' && (
        <PresentModal event={event} onClose={true} />
      )}
      <RecipeHeroWrapper>
        <Container>
          <HeroTitle>{title}</HeroTitle>
          <HeroDescr>{description}</HeroDescr>
          {!recipeOnFavorite && (
            <HeroBtn onClick={handleFavoriteBtn}>
              Add to favorite recipes
            </HeroBtn>
          )}
          {recipeOnFavorite && (
            <HeroBtn onClick={handleFavoriteBtn}>
              Remove from favorite recipes
            </HeroBtn>
          )}
          <HeroTimeBlock>
            <HeroSvg />
            <HeroTime>{time} min</HeroTime>
          </HeroTimeBlock>
        </Container>
      </RecipeHeroWrapper>
    </>
  );
}

export default RecipeHero;
