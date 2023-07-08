import React from 'react';
import { BtnNavStyl } from './BtnNav.Styled';

const BtnNav = ({ to, children }) => {
  return <BtnNavStyl to={to}>{children}</BtnNavStyl>;
};

export default BtnNav;
