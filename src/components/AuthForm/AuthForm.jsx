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

import { registerThunk, signinThunk } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import {
  initialValuesRegister,
  initialValuesSignIn,
  schemaRegister,
  schemaSignIn,
} from './schema';

const AuthForm = ({ isRegistration }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      isRegistration
        ? await dispatch(registerThunk(values))
        : await dispatch(signinThunk(values));
    } catch (error) {
      console.log(error);
    }

    // resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={
          isRegistration ? initialValuesRegister : initialValuesSignIn
        }
        validationSchema={isRegistration ? schemaRegister : schemaSignIn}
        onSubmit={handleSubmit}
      >
        <FormAuth>
          <Title>{isRegistration ? 'Registration' : 'Sign In'}</Title>
          <FeedbackFormGroup>
            {isRegistration && (
              <>
                <InputForm type="text" name="name" placeholder="Name" />
                <StyleErrorMessage name="name">
                  {msg => <Error>{msg}</Error>}
                </StyleErrorMessage>
              </>
            )}
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
            <BtnRegister type="submit">
              {isRegistration ? 'Sign Up' : 'Sign In'}
            </BtnRegister>
          </Btnwrapper>
        </FormAuth>
      </Formik>
      <Link>
        {isRegistration ? (
          <StyledNavLink to="/auth/signin">Sign In</StyledNavLink>
        ) : (
          <StyledNavLink to="/auth/register">Register</StyledNavLink>
        )}
      </Link>
    </div>
  );
};

export default AuthForm;
