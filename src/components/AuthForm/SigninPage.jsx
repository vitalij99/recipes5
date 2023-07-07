import { Formik } from 'formik';
import {
  BtnRegister,
  Btnwrapper,
  Error,
  FeedbackFormGroup,
  FormAuth,
  InputForm,
  StyleErrorMessage,
  Link,
} from './AuthForm.Styled';
import * as yup from 'yup';

import { NavLink } from 'react-router-dom';

const SigninPageForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const schema = yup.object().shape({
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
        <FormAuth>
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
        </FormAuth>
      </Formik>
      <Link>
        <NavLink to="/auth/register">Sign Up</NavLink>
      </Link>
    </>
  );
};

export default SigninPageForm;
