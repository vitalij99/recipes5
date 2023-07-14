import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const BtnStyled = styled(NavLink)`
  padding: 10px 35px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid green;
  width: 195px;
  height: 46px;
  display: block;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  border: 2px solid #8baa36;
  color: #22252a;
  background: #fafafa;
  &:hover {
    background: #8baa36;
    color: #fafafa;
  }
`;
