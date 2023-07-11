import React from 'react';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Container from 'components/Container/Container';
import { MyRecipesPageWrap } from './MyRecipesPage.styled';
import { FavoritePage as MyRecipes } from 'components/FavoritePage/FavoritePage';
const MyRecipesPage = () => {
  return <MyRecipesPageWrap>
   <Container>
  <MainPageTitle title={'My recipes'} >
   </MainPageTitle>
   <MyRecipes></MyRecipes>
 </Container>;
  </MyRecipesPageWrap>
};

export default MyRecipesPage;
