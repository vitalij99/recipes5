import React from 'react';
import { LoaderContainer, PulsatingAnimation, Icon } from './Loader.styled';

const Loader = () => {
  return (
    <>
      <LoaderContainer>
        <PulsatingAnimation>
          <Icon />
        </PulsatingAnimation>
      </LoaderContainer>
    </>
  );
};

export default Loader;
