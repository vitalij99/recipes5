import React from 'react';
import { FavoritePage as Favorite } from 'components/FavoritePage/FavoritePage';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Container from 'components/Container/Container';
import { FavoritePageWrap } from './FavoritePage.styled';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/recipe/recipeSelector';
import Loader from 'components/Loader/Loader';
const FavoritePage = () => {
  const isLoading = useSelector(getIsLoading);
  return <FavoritePageWrap>
   <Container>
   <MainPageTitle title={'Favorites'} />
    
    {isLoading && <Loader />}
    <Favorite/>
  </Container>;
  </FavoritePageWrap>
};

export default FavoritePage;
