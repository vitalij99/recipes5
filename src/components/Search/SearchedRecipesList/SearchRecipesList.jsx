import { CardItem } from 'components/Categories/CardItem';
import Container from 'components/Container/Container';
import { Section } from 'components/Search/SearchedRecipesList/SearchRecipesList.styled';
import React from 'react';
import data from '../../Categories/data.json';
import { SearchNotFound } from '../SearchNotFound/SearchNotFound';

export const SearchRecipesList = () => {
  return (
    <>
      <Section>
        <Container>
          {data ? <SearchNotFound /> : <CardItem data={data} />}
        </Container>
      </Section>
    </>
  );
};
