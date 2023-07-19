import React from 'react';
import { Categories } from 'components/Categories/Categories';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { selectCategoriesLoad } from 'redux/categories/categoriesSelector';
import Loader from 'components/Loader/Loader';

const CategoriesPage = () => {
  const isLoading = useSelector(selectCategoriesLoad);
  return (
    <Container>
      <MainPageTitle title={'Categories'} />
      {isLoading && <Loader />}
      <Categories />
    </Container>
  );
};

export default CategoriesPage;
