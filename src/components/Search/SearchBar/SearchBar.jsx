import React from 'react';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';
import Container from 'components/Container/Container';
import { Section } from './SearchBar.styled';
import { SearchFrom } from '../SearchForm/SearchFrom';

export const SearchBar = () => {
  return (
    <>
      <Section>
        <Container>
          <SearchFrom />
          <SearchTypeSelector />
        </Container>
      </Section>
    </>
  );
};
