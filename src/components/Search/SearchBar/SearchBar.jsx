import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import Container from 'components/Container/Container';
import { Section } from './SearchBar.styled';
import { SearchForm } from '../SearchForm/SearchFrom';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { customStyles } from './SearchBar.styled';
import { Wrapper } from './SearchBar.styled';

const searchOptions = [
  {
    type: 'query',
    label: 'Title',
  },
  {
    type: 'ingredient',
    label: 'Ingredients',
  },
];
export const SearchBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(searchOptions[0]);
  const [typeQuery, setTypeQuery] = useState('query');
  const theme = useTheme();
  const location = useLocation();
  const currentSearch = location.search;

  useEffect(() => {
    if (currentSearch.includes('?ingredient')) {
      setTypeQuery('ingredient');
      setDefaultValue(searchOptions[1]);
    } else {
      setTypeQuery('query');
      setDefaultValue(searchOptions[0]);
    }
  }, [currentSearch]);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  const handleSelectChange = selectedOption => {
    setDefaultValue(selectedOption);
    setTypeQuery(selectedOption.type);
  };
  return (
    <>
      <Section>
        <Container>
          <SearchForm typeQuery={typeQuery} />
          <Wrapper>
            <p>Search by:</p>
            <Select
              id={'selectSearchType'}
              menuIsOpen={isMenuOpen}
              onMenuOpen={openMenuHandler}
              onMenuClose={closeMenuHandler}
              options={searchOptions}
              onChange={handleSelectChange}
              value={defaultValue}
              styles={customStyles(theme)}
              isSearchable={false}
            />
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
