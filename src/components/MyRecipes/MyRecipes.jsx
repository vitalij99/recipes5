import {
  Card,
  CardImg,
  CardDesc,
  CardList,
  CardTimeWrap,
  CardTextWrap,
  CardTitle,
  TrashSvg,
  Time,
  DeleteBtn,
  SeeRecipeBtn,
  NotFoundText,
} from './MyRecipes.styled';
import { Link } from 'react-router-dom';
import { selectMyRecipesList } from 'redux/myrecipes/myRecipeSelectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMyRecipes,
  removeMyRecipe,
} from '../../redux/myrecipes/myRecipeOperations';
import { SearchNotFound } from 'components/Search/SearchNotFound/SearchNotFound';

export const MyRecipes = () => {
  const recipesList = useSelector(selectMyRecipesList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyRecipes());
  }, [dispatch]);

  const FavoriteCards = recipesList.map(
    ({ _id, title, description, preview, time }) => (
      <Card key={_id}>
        <CardImg src={preview} alt="dish" />
        <CardTextWrap>
          <div>
            <CardTitle>{title}</CardTitle>
            <DeleteBtn onClick={() => dispatch(removeMyRecipe(_id))}>
              <TrashSvg />
            </DeleteBtn>
          </div>
          <CardDesc>{description}</CardDesc>
          <CardTimeWrap>
            <Time>{time} min</Time>
            <Link to={`/recipe/${_id}`}>
              <SeeRecipeBtn>See recipee</SeeRecipeBtn>
            </Link>
          </CardTimeWrap>
        </CardTextWrap>
      </Card>
    )
  );

  return (
    <>
      {recipesList.length !== 0 ? (
        <CardList>{FavoriteCards}</CardList>
      ) : (
        <>
          <SearchNotFound text={`You don't have your own recipes...`} />
        </>
      )}
    </>
  );
};
