import Container from 'components/Container/Container';
import React from 'react';
import {
  List,
  Section,
  Titles,
  TitlesContainer,
} from './IngredientsShoppingList.styled';

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
