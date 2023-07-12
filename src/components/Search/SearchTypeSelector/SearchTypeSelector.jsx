import React, { useState } from 'react';
import { Wrapper } from './SearchTypeSelector.styled';
import { Dropdown } from './Dropdown';

export const SearchTypeSelector = () => {
  const [searchType, setSearchType] = useState('query');

  const handleSelectChange = selectedOption => {
    setSearchType(selectedOption.type);
  };

  const searchTypes = [
    {
      type: 'query',
      label: 'Title',
    },
    {
      type: 'ingredient',
      label: 'Ingredients',
    },
  ];

  return (
    <>
      <Wrapper>
        <p>Search by:</p>
        <Dropdown
          onChange={handleSelectChange}
          id={'selectSearchType'}
          data={searchTypes}
        />
      </Wrapper>
    </>
  );
};
