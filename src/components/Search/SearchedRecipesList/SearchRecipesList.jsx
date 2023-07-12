import { Categories } from 'components/Categories/Categories';
import Container from 'components/Container/Container';
import { Section } from 'components/Search/SearchedRecipesList/SearchRecipesList.styled';
import React from 'react';

export const SearchRecipesList = () => {
  return (
    <>
      <Section>
        <Container>
          <Categories />
        </Container>
      </Section>
    </>
  );
};
