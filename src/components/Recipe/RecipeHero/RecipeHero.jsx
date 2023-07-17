import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectFavoriteList } from 'redux/recipe/recipeSelector';

import PresentModal from '../PresentModal/PresentModal';
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
import {
  addRecipeToFavorite,
  removeRecipeToFavorite,
} from 'redux/recipe/recipeOperetion';

function RecipeHero({ time, title, description, id }) {
  const [event, setEvent] = useState(null);
  const [recipeOnFavorite, setRecipeOnFavorite] = useState(false);

  const favorites = useSelector(selectFavoriteList);

  useEffect(() => {
    const res = favorites.some(val => val.id === id);
    setRecipeOnFavorite(res);
  }, [id, favorites]);

  const dispatch = useDispatch();

  const handleFavoriteBtn = () => {
    if (favorites.length === 0) {
      setEvent('firstRecipeOnFavorite');
    }
    if (favorites.length === 9) {
      setEvent('tenRecipesOnFavorite');
    }

    if (!recipeOnFavorite) {
      dispatch(addRecipeToFavorite(id));
      setRecipeOnFavorite(!recipeOnFavorite);
    } else {
      dispatch(removeRecipeToFavorite(id));
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
