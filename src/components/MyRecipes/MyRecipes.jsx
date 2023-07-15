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
  import someJson  from '../FavoritePage/testarray';
  // import { useEffect } from 'react';
  // import { useSelector, useDispatch } from 'react-redux';
  export const MyRecipes = () => {
   

    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch();
    // }, [dispatch]);

  
    const MyRecipesCards = someJson.map(
      ({ _id, title, description, preview, time }) => (
        <Card key={_id}>
          <CardImg src={preview} alt="dish" />
          <CardTextWrap>
            <div>
              <CardTitle>{title}</CardTitle>
              <DeleteBtn>
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
        {someJson.length !== 0 ? (
            <CardList>
            {MyRecipesCards}
          </CardList>
        ) : (<ErrorWrap>
            <ErrorPhoto></ErrorPhoto>
            </ErrorWrap>
            )}
        </>
    );
  };