import React from 'react';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';
import Container from 'components/Container/Container';
import { Section } from './SearchBar.styled';
import { SearchForm } from '../SearchForm/SearchFrom';

export const SearchBar = () => {
  return (
    <>
      <Section>
        <Container>
          <SearchForm />
          <SearchTypeSelector />
        </Container>
      </Section>
    </>
  );
};
