import RegistrationForm from 'components/AuthForm/RegistrationForm';
import SigninPageForm from 'components/AuthForm/SigninPage';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, ImgWrapper, Section } from './AuthPage.Styled';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <Section>
      <Container>
        <ImgWrapper />
        {id === 'signin' && <SigninPageForm />}
        {id === 'register' && <RegistrationForm />}
      </Container>
    </Section>
  );
};

export default AuthPage;
