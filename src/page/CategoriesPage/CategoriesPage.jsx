import React from 'react';
import { Categories } from 'components/Categories/Categories'
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Container from 'components/Container/Container';

const CategoriesPage = () => {
  return <Container>
  <MainPageTitle title={'Categories'} />
  <Categories />
  </Container>

};

export default CategoriesPage;
