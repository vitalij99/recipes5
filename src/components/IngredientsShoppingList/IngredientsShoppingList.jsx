import Container from 'components/Container/Container';
import React from 'react';
import {
  List,
  Section,
  Titles,
  TitlesContainer,
} from './IngredientsShoppingList.styled';

import data from './ingredients.json';

export const IngredientsShoppingList = () => {
  console.log(data);

  return (
    <>
      <Section>
        <Container>
          <Titles>
            <div>Product</div>
            <TitlesContainer>
              <div>Number</div>
              <div>Remove</div>
            </TitlesContainer>
          </Titles>
          <List>
            <li>
              <div>
                <img src="" alt="" />
              </div>
              <div></div>
              <div></div>
              <div></div>
            </li>
          </List>
        </Container>
      </Section>
    </>
  );
};
