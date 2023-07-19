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
} from './FavoritePage.styled';
import { Link } from 'react-router-dom';
import { selectFavoriteList } from 'redux/recipe/recipeSelector';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFavoriteRecipes,
  removeRecipeToFavorite,
} from '../../redux/recipe/recipeOperetion';
import { SearchNotFound } from 'components/Search/SearchNotFound/SearchNotFound';

export const FavoritePage = () => {
  const favorite = useSelector(selectFavoriteList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteRecipes());
  }, [dispatch]);

  const FavoriteCards = favorite.map(
    ({ _id, title, description, preview, time }) => (
      <Card key={_id}>
        <CardImg src={preview} alt="dish" />
        <CardTextWrap>
          <div>
            <CardTitle>{title}</CardTitle>
            <DeleteBtn
              onClick={() => {
                dispatch(removeRecipeToFavorite(_id));
                console.log(_id);
                return;
              }}
            >
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
      {favorite.length !== 0 ? (
        <CardList>{FavoriteCards}</CardList>
      ) : (
        <>
          <SearchNotFound text={` You don't have favorite recipes...`} />
        </>
      )}
    </>
  );
};
