import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import React from 'react';

const ShoppingListPage = () => {
  return (
    <>
      <MainPageTitle title={'Shopping List'} />
      <IngredientsShoppingList />
    </>
  );
};

export default ShoppingListPage;
