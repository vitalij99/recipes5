import React from 'react';
import { Img, Text, Wrapper } from './SearchNotFound.styled';
import Container from 'components/Container/Container';

export const SearchNotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Img />
        <Text>Try looking for something else...</Text>
      </Wrapper>
    </Container>
  );
};
