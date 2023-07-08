import * as yup from 'yup';

const emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
};
export const schemaRegister = yup.object().shape({
  name: yup.string().min(4).max(20).required(),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', value => {
      return emailPatern.test(value);
    })
    .required(),
  password: yup.string().min(8).max(64).required(),
});
export const initialValuesSignIn = {
  email: '',
  password: '',
};
export const schemaSignIn = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', value => {
      return emailPatern.test(value);
    })
    .required(),
  password: yup.string().min(8).max(64).required(),
});
