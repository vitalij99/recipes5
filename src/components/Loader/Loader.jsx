import React from 'react';
import {
  LoaderContainer,
  StyledLoaderIcon,
  PulsatingAnimation,
} from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <PulsatingAnimation>
        <StyledLoaderIcon />
      </PulsatingAnimation>
    </LoaderContainer>
  );
};

export default Loader;
