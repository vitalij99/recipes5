import React, { useState } from 'react';
import { Button, DivStyled, InputSearchStyled } from './Search.Style';

const Search = () => {
  const [searchValue, setsearchValue] = useState('');
  const [imutValue, setImutValue] = useState('');

  const handleChange = ({ target }) => {
    const trimmedValue = target.value.trimLeft();
    setsearchValue(trimmedValue);
    setImutValue('/search?' + trimmedValue);
  };

  return (
    <DivStyled>
      <InputSearchStyled
        value={searchValue}
        onChange={handleChange}
      ></InputSearchStyled>
      <Button to={searchValue ? imutValue : '/search'}>Search</Button>
    </DivStyled>
  );
};

export default Search;
