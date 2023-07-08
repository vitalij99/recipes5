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
  StyledNavLink,
  Title,
} from './AuthForm.Styled';
import * as yup from 'yup';

import { registerThunk } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
  const dispatch = useDispatch();

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
      await dispatch(registerThunk(values));
    } catch (error) {
      console.log(error);
    }

    // resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormAuth>
          <Title>Registration</Title>
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
        </FormAuth>
      </Formik>
      <Link>
        <StyledNavLink to="/auth/signin">Sign In</StyledNavLink>
      </Link>
    </div>
  );
};

export default RegistrationForm;
