import React from 'react';
import { FavoritePage as Favorite } from 'components/FavoritePage/FavoritePage';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Container from 'components/Container/Container';
import { FavoritePageWrap } from './FavoritePage.styled';
const FavoritePage = () => {
  return <FavoritePageWrap>
   <Container>
   <MainPageTitle title={'Favorites'} >
    </MainPageTitle>
    <Favorite></Favorite>
  </Container>;
  </FavoritePageWrap>
};

export default FavoritePage;
