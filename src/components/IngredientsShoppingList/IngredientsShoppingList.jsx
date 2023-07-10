import Container from 'components/Container/Container';
import React from 'react';
import {
  List,
  Section,
  Titles,
  TitlesContainer,
} from './IngredientsShoppingList.styled';

import data from './ingredients.json';
import { ListItem } from './ListItem';

export const IngredientsShoppingList = () => {
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
            <ListItem data={data} />
          </List>
        </Container>
      </Section>
    </>
  );
};
