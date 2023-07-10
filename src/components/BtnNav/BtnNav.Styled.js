import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnNavStyl = styled(NavLink)`
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  border: 1px solid transparent;
  padding: 12px 24px;
  margin: 6px;
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding: 22px 44px;
    margin: 9px;
    font-size: 16px;
    line-height: 24px;
  }
  &.dark {
    border-color: #fafafa;
    background-color: transparent;

    &:hover,
    &:focus {
      background-color: #8baa36;
      border-color: transparent;
    }
  }

  &:hover,
  &:focus {
    background-color: transparent;
    border-color: #fafafa;
  }
`;
