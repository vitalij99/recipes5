import React from 'react';
import { Formik } from 'formik';
import {
  BtnRegister,
  Btnwrapper,
  Error,
  FeedbackFormGroup,
  FormRegistration,
  InputForm,
  StyleErrorMessage,
  Link,
} from './RegistrationForm.Styled';
import * as yup from 'yup';

import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().min(4).max(20).required(),
    email: yup
      .string()
      .email('Invalid email')
      .test('email-format', 'Invalid email format', value => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      })
      .required(),
    password: yup.string().min(8).max(64).required(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }

    // resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormRegistration>
          <FeedbackFormGroup>
            <InputForm type="text" name="name" placeholder="Name" />
            <StyleErrorMessage name="name">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm type="email" name="email" placeholder="Email" />
            <StyleErrorMessage name="email">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm type="password" name="password" placeholder="Password" />
            <StyleErrorMessage name="password">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <Btnwrapper>
            <BtnRegister type="submit">Sign up</BtnRegister>
          </Btnwrapper>
        </FormRegistration>
      </Formik>
      <Link>
        <NavLink to="/auth/signin">Sign In</NavLink>
      </Link>
    </>
  );
};

export default RegistrationForm;
