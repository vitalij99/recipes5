import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';

export const FormAuth = styled(Form)`
  margin: 0 auto;
  padding: 32px 28px 40px 28px;
  width: 335px;
  background-color: #2a2c36;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 500px;

    padding: 32px 40px 44px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Title = styled.h1`
  color: #fafafa;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.48px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 28px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 12px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const IconStyled = styled.svg`
  position: absolute;
  stroke: #ffffff;
  width: 18px;
  height: 18px;
  top: 14px;
  left: 14px;
  .error & {
    stroke: #e74a3b;
  }
  .valid & {
    stroke: #3cbc81;
  }
`;
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
  &:hover {
    border: 1px solid #ffffff;
    outline: 1px solid #ffffff;
    color: #ffffff;
    opacity: 1;
  }
  .error & {
    border: 1px solid #e74a3b;
    outline: none;
  }
  .valid & {
    border: 1px solid #3cbc81;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Error = styled.div`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`;
export const StyleErrorMessage = styled(ErrorMessage)``;
export const Btnwrapper = styled.div`
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
  }
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

  &.active {
    font-weight: bold;
  }
`;
