import React, { useState } from 'react';
import Select from 'react-select';
import { customStyles } from './Dropdown.styled';
import { useTheme } from 'styled-components';

export const Dropdown = ({ onChange, id, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = useTheme();

  const openMenuHandler = () => {
    setIsMenuOpen(true);

    const menu = document.querySelector(`#${id} #react-select-3-listbox`);

    if (!menu) {
      return;
    }

    menu.style.opacity = '1';
    menu.style.transition = 'all 1s ease';
    menu.style.transform = 'translateY(0)';
  };

  const closeMenuHandler = () => {
    const menu = document.querySelector(`#${id} #react-select-3-listbox`);

    if (!menu) {
      return;
    }

    menu.style.opacity = '0';
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
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
