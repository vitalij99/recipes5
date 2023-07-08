import RegistrationForm from 'components/AuthForm/RegistrationForm';
import SigninPageForm from 'components/AuthForm/SigninPage';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, ImgWrapper } from './AuthPage.Styled';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <ImgWrapper />
      {id === 'signin' && <SigninPageForm />}
      {id === 'register' && <RegistrationForm />}
    </Container>
  );
};

export default AuthPage;
