import RegistrationForm from 'components/AuthForm/RegistrationForm';
import SigninPageForm from 'components/AuthForm/SigninPage';
import React from 'react';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <div>
      {id === 'signin' && <SigninPageForm />}
      {id === 'register' && <RegistrationForm />}
    </div>
  );
};

export default AuthPage;
