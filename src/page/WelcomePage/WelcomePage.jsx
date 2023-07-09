import Container from 'components/Container/Container';
import React from 'react';
import { DivStyled, Title, PStyled } from './WelcomePage.styled';
import BtnNav from 'components/BtnNav/BtnNav';

const WelcomePage = () => {
  return (
    <DivStyled>
      <Container>
        <Title>Welcome to the app!</Title>
        <PStyled>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </PStyled>
        <BtnNav to="auth/register">Register</BtnNav>
        <BtnNav to="auth/signin" className="dark">
          Sign In
        </BtnNav>
      </Container>
    </DivStyled>
  );
};

export default WelcomePage;
