import Container from 'components/Container/Container';
import React from 'react';
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import data from './ingredients.json';
import { TitlesSection } from './TitlesSection';

export const IngredientsShoppingList = () => {
  return (
    <>
      <Section>
        <Container>
          <TitlesSection />
          <ListSection data={data} />
        </Container>
      </Section>
    </>
  );
};
