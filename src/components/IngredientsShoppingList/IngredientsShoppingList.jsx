import Container from 'components/Container/Container';
import React from 'react';
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import { TitlesSection } from './TitlesSection';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/recipe/recipeSelector';
import { removeShoppingList } from 'redux/recipe/recipeSlice';

export const IngredientsShoppingList = () => {
  const dispatch = useDispatch();

  const shoppingList = useSelector(selectShoppingList);

  const handleRemoveShoppingList = id => {
    // console.log(id);
    dispatch(removeShoppingList(id));
  };

  return (
    <>
      <Section>
        <Container>
          <TitlesSection />
          <ListSection data={shoppingList} onClick={handleRemoveShoppingList} />
        </Container>
      </Section>
    </>
  );
};
