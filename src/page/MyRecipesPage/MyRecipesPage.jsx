import React from 'react';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Container from 'components/Container/Container';
import { MyRecipesPageWrap } from './MyRecipesPage.styled';
import { MyRecipes } from 'components/MyRecipes/MyRecipes';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/myrecipes/myRecipeSelectors';
import Loader from 'components/Loader/Loader';
const MyRecipesPage = () => {
  const isLoading = useSelector(getIsLoading);
  return (
    <MyRecipesPageWrap>
      <Container>
        <MainPageTitle title={'My recipes'} />
        {isLoading && <Loader />}
        <MyRecipes />
      </Container>
    </MyRecipesPageWrap>
  );
};

export default MyRecipesPage;
