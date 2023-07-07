import RegistrationForm from 'components/AuthForm/RegistrationForm';
import React from 'react';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      {/* {id === 'login' && <LoginForm />} */}
      {id === 'register' && <RegistrationForm />}
    </div>
  );
};

export default AuthPage;
