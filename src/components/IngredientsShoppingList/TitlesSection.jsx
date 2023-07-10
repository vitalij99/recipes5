import React from 'react';
import { Titles, TitlesContainer } from './IngredientsShoppingList.styled';

export const TitlesSection = () => {
  return (
    <Titles>
      <div>Product</div>
      <TitlesContainer>
        <div>Number</div>
        <div>Remove</div>
      </TitlesContainer>
    </Titles>
  );
};
