import React, { useState } from 'react';
import Select from 'react-select';
import { customStyles } from './Dropdown.styled';
import { useTheme } from 'styled-components';

export const Dropdown = ({ onChange, id, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = useTheme();

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Select
        id={id}
        menuIsOpen={isMenuOpen}
        onMenuOpen={openMenuHandler}
        onMenuClose={closeMenuHandler}
        options={data}
        onChange={onChange}
        defaultValue={data[0]}
        styles={customStyles(theme)}
        isSearchable={false}
      />
    </>
  );
};
