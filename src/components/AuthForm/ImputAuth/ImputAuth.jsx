import {
  Error,
  IconFeedback,
  IconStyled,
  InputForm,
  StyleErrorMessage,
} from './ImputAuth.Styled';
import svgSprit from 'images/authPage/symbol-defs.svg';

const ImputAuth = ({ name, type, placeholder, errors, touched, iconName }) => {
  return (
    <>
      <InputForm type={type} name={name} placeholder={placeholder} />
      <IconStyled>
        <use xlinkHref={`${svgSprit}${iconName}`} />
      </IconStyled>
      <IconFeedback>
        <use
          xlinkHref={
            errors && touched
              ? `${svgSprit}#icon-error`
              : touched && `${svgSprit}#icon-valid`
          }
        />
      </IconFeedback>
      <StyleErrorMessage name={name}>
        {msg => <Error>{msg}</Error>}
      </StyleErrorMessage>
    </>
  );
};

export default ImputAuth;
