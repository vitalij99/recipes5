import React from 'react';
import { ToTopStyled } from './ToTop.styled';
import { BiArrowToTop } from 'react-icons/bi';
export const ToTop = () => {
  return (
    <>
      <ToTopStyled smooth top="800" component={<BiArrowToTop size={28} />} />
      <BiArrowToTop />
    </>
  );
};
