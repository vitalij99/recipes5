import React from 'react';
import { BtnNavStyl } from './BtnNav.Styled';

const BtnNav = ({ to, children, className }) => {
  return (
    <BtnNavStyl to={to} className={className}>
      {children}
    </BtnNavStyl>
  );
};

export default BtnNav;
