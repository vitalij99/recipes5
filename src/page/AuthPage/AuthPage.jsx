import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, ImgWrapper, Section } from './AuthPage.Styled';
import AuthForm from 'components/AuthForm/AuthForm';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <Section>
      <Container>
        <ImgWrapper />
        <AuthForm isRegistration={id !== 'signin'} />
      </Container>
    </Section>
  );
};

export default AuthPage;
