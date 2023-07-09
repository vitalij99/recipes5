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
  IconStyled,
} from './AuthForm.Styled';

import { registerThunk, signinThunk } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import {
  initialValuesRegister,
  initialValuesSignIn,
  schemaRegister,
  schemaSignIn,
} from './schema';

import svgSprit from 'images/authPage/symbol-defs.svg';

const AuthForm = ({ isRegistration }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    try {
      isRegistration
        ? await dispatch(registerThunk(values))
        : await dispatch(signinThunk({ email, password }));
    } catch (error) {
      console.log(error);
    }

    resetForm();
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
        {({ errors, touched }) => (
          <FormAuth>
            <Title>{isRegistration ? 'Registration' : 'Sign In'}</Title>
            {isRegistration && (
              <FeedbackFormGroup
                className={
                  errors.name && touched.name
                    ? 'error'
                    : touched.name && 'valid'
                }
              >
                <>
                  <InputForm type="text" name="name" placeholder="Name" />

                  <IconStyled>
                    <use xlinkHref={`${svgSprit}#icon-user`} />
                  </IconStyled>
                  <StyleErrorMessage name="name">
                    {msg => <Error>{msg}</Error>}
                  </StyleErrorMessage>
                </>
              </FeedbackFormGroup>
            )}
            <FeedbackFormGroup
              className={
                errors.email && touched.email
                  ? 'error'
                  : touched.email && 'valid'
              }
            >
              <IconStyled>
                <use xlinkHref={`${svgSprit}#icon-mail`} />
              </IconStyled>
              <InputForm type="email" name="email" placeholder="Email" />
              <StyleErrorMessage name="email">
                {msg => <Error>{msg}</Error>}
              </StyleErrorMessage>
            </FeedbackFormGroup>
            <FeedbackFormGroup
              className={
                errors.password && touched.password
                  ? 'error'
                  : touched.password && 'valid'
              }
            >
              <IconStyled>
                <use xlinkHref={`${svgSprit}#icon-lock`} />
              </IconStyled>
              <InputForm
                type="password"
                name="password"
                placeholder="Password"
              />
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
        )}
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
