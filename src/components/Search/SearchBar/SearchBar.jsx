import React from 'react';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';
import Container from 'components/Container/Container';
import { Section } from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <>
      <Section>
        <Container>
          <div>SearchForm placeholder</div>
          <SearchTypeSelector />{' '}
        </Container>
      </Section>
    </>
  );
};
