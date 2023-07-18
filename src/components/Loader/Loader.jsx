import React from 'react';
import {
  LoaderContainer,
  PulsatingAnimation,
  Icon,
  LoaderContainer2,
} from './Loader.styled';

const Loader = ({ fullscreen }) => {
  return (
    <>
      {fullscreen ? (
        <LoaderContainer2>
          <PulsatingAnimation>
            <Icon />
          </PulsatingAnimation>
        </LoaderContainer2>
      ) : (
        <LoaderContainer>
          <PulsatingAnimation>
            <Icon />
          </PulsatingAnimation>
        </LoaderContainer>
      )}
    </>
  );
};

export default Loader;
