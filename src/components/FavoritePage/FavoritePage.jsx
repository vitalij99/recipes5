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
  } from './FavoritePage.styled';
  import { Link } from "react-router-dom";
  import someJson  from './testarray';
  // import { useEffect } from 'react';
  // import { useSelector, useDispatch } from 'react-redux';
  export const FavoritePage = () => {
   

    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch();
    // }, [dispatch]);

  
    const FavoriteCards = someJson.map(
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
            {FavoriteCards}
          </CardList>
        ) : (<ErrorWrap>
            <ErrorPhoto></ErrorPhoto>
            </ErrorWrap>
            )}
        </>
    );
  };