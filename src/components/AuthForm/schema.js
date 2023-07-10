import * as yup from 'yup';

const nameRegexp = /(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$/;
const emailPatern = /^\S+@\S+\.\S+$/;

export const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
};
export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required()
    .test('name-format', 'Invalid name format', value => {
      return nameRegexp.test(value);
    }),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', value => {
      return emailPatern.test(value);
    })
    .required(),
  password: yup.string().min(6).max(6).required(),
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
  password: yup.string().min(6).max(6).required(),
});
