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
  ErrorPhoto,
  ErrorWrap,
} from './MyRecipes.styled';
import { Link } from "react-router-dom";
import { selectMyRecipesList } from 'redux/myrecipes/myRecipeSelectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMyRecipes,
  removeMyRecipe,
} from '../../redux/myrecipes/myRecipeOperations';
export const MyRecipes = () => {
  
  const recipesList = useSelector(selectMyRecipesList);
  console.log(recipesList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyRecipes());
  }, [dispatch]);
  
  const handleDelete = () => dispatch(removeMyRecipe(data._id));

  let data = recipesList.length > 4 ? recipesList.slice(0, 4) : recipesList;

  const FavoriteCards = data.map(
    ({ _id, title, description, preview, time }) => (
      <Card key={_id}>
        <CardImg src={preview} alt="dish" />
        <CardTextWrap>
          <div>
            <CardTitle>{title}</CardTitle>
            <DeleteBtn onClick={handleDelete}>
              <TrashSvg />
            </DeleteBtn>
          </div>
          <CardDesc>{description}</CardDesc>
          <CardTimeWrap>
            <Time>{time} min</Time>
            <Link
              to={`/recipe/${_id}`}
            >
              <SeeRecipeBtn>See recipee</SeeRecipeBtn>
            </Link>
          </CardTimeWrap>
        </CardTextWrap>
      </Card>
    )
  );

  return (
      <>
      {data.length !== 0 ? (
          <CardList>
          {FavoriteCards}
        </CardList>
      ) : (<ErrorWrap>
          <ErrorPhoto></ErrorPhoto>
          </ErrorWrap>
          )}
      </>
  );
};