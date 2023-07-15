import { ThemeToggleStyled, SwitchStyled } from './ThemeToggle.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectUserTheme } from 'redux/theme/themeSelector';
import { toggleTheme } from 'redux/theme/themeSlice';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const theme = useSelector(selectUserTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsChecked(theme === 'dark');
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleStyled>
      <input type="checkbox" checked={isChecked} onChange={handleThemeToggle} />

      <SwitchStyled />
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
