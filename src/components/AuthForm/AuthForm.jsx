import { Formik } from 'formik';
import {
  BtnRegister,
  Btnwrapper,
  FormAuth,
  StyledNavLink,
  Title,
  Link,
} from './AuthForm.Styled';

import { registerThunk, signinThunk } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import {
  initialValuesRegister,
  initialValuesSignIn,
  schemaRegister,
  schemaSignIn,
} from './schema';

import ImputAuth from './ImputAuth/ImputAuth';

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
              <>
                <ImputAuth
                  type="text"
                  name="name"
                  placeholder="Name"
                  errors={errors.name}
                  touched={touched.name}
                  iconName="#icon-user"
                />
              </>
            )}
            <ImputAuth
              type="email"
              name="email"
              placeholder="Email"
              errors={errors.email}
              touched={touched.email}
              iconName="#icon-mail"
            />
            <ImputAuth
              type="password"
              name="password"
              placeholder="Password"
              errors={errors.password}
              touched={touched.password}
              iconName="#icon-lock"
            />
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
