import React, { useState } from 'react';
import { SearchTypeSelector } from '../SearchTypeSelector/SearchTypeSelector';
import Container from 'components/Container/Container';
import { Section } from './SearchBar.styled';
import { SearchForm } from '../SearchForm/SearchFrom';

export const SearchBar = () => {
  const [typeQuery, setTypeQuery] = useState('query');
  return (
    <>
      <Section>
        <Container>
          <SearchForm typeQuery={typeQuery} />
          <SearchTypeSelector setTypeQuery={setTypeQuery} />
        </Container>
      </Section>
    </>
  );
};
