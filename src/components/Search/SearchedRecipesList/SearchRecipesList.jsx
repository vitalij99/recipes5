import { CardItem } from 'components/Categories/CardItem';
import Container from 'components/Container/Container';
import { Section } from 'components/Search/SearchedRecipesList/SearchRecipesList.styled';
import React from 'react';
import data from '../../Categories/data.json';

export const SearchRecipesList = () => {
  return (
    <>
      <Section>
        <Container>
          <CardItem data={data} />
        </Container>
      </Section>
    </>
  );
};
