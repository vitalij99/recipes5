import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';

export const FormAuth = styled(Form)`
  margin: 0 auto;
  padding: 32px 28px 40px 28px;
  width: 335px;
  background-color: #1e1f28;
  border-radius: 30px;

  @media screen and (var(--small-screen)) {
  }
  @media screen and (var(--medium-screen)) {
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 1px #fafafa;
  border-radius: 6px;
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
  color: #fafafa;
  border-radius: 6px;
  white-space: nowrap;
`;
export const Link = styled.div`
  text-align: center;
  margin-top: 18px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    font-weight: bold;
  }
`;
