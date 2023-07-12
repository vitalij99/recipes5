import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { SearchBar } from 'components/Search/SearchBar/SearchBar';
import { SearchRecipesList } from 'components/Search/SearchedRecipesList/SearchRecipesList';
import React from 'react';

const SearchPage = () => {
  return (
    <>
      <MainPageTitle title={'Search'} />
      <SearchBar />
      <SearchRecipesList />
    </>
  );
};

export default SearchPage;
