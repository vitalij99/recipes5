import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegistration = styled(Form)`
  padding: 32px 28px 40px 28px;
  width: 335px;
  background-color: #1e1f28;
  border-radius: 30px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
`;
export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 12px;
  position: relative;
`;
export const StyleErrorMessage = styled(ErrorMessage)``;
export const InputForm = styled(Field)`
  width: 100%;
  padding: 12px;
  padding-left: 40px;
  color: #fafafa;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 1px #1e1f28;
  opacity: 0.8;
  background-color: transparent;
`;
export const Error = styled.div`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;

export const Btnwrapper = styled.div`
  margin-top: 28px;
`;
export const BtnRegister = styled.button`
  width: 100%;
  padding: 14px 110px;
  background-color: #8baa36;
  border-radius: 6px;
`;
export const Link = styled.div``;
