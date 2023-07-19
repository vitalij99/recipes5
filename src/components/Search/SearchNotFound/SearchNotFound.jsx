import React from 'react';
import { Img, Text, Wrapper } from './SearchNotFound.styled';
import Container from 'components/Container/Container';

export const SearchNotFound = ({ text }) => {
  return (
    <Container>
      <Wrapper>
        <Img />
        <Text>{text}</Text>
      </Wrapper>
    </Container>
  );
};
