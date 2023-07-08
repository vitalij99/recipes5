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
  Container,
  StyledNavLink,
} from './AuthForm.Styled';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { signinThunk } from 'redux/auth/authOperation';

const SigninPageForm = () => {
  const dispatch = useDispatch();

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
      await dispatch(signinThunk(values));
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
        <StyledNavLink to="/auth/register">Sign Up</StyledNavLink>
      </Link>
    </>
  );
};

export default SigninPageForm;
