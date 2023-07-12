import React, { useState } from 'react';
import { Button, DivStyled, InputSearchStyled } from './Search.Style';

const Search = () => {
  const [searchValue, setsearchValue] = useState('');
  const [imutValue, setImutValue] = useState('');

  const handleChange = ({ target }) => {
    setsearchValue(target.value);
    setImutValue('/search?' + target.value);
  };

  return (
    <DivStyled>
      <InputSearchStyled
        value={searchValue}
        onChange={handleChange}
      ></InputSearchStyled>
      <Button to={imutValue}>Search</Button>
    </DivStyled>
  );
};

export default Search;
