import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const BtnStyled = styled(NavLink)`
  padding: 10px 35px;
  background-color: transparent;
  border-radius: 24px 44px;
  border: 2px solid green;
  width: 195px;
  height: 46px;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  line-height: 21px;
  border: 2px solid ${props => props.theme.mainPage.list.buttonOther.outline};
  color: ${props => props.theme.mainPage.list.buttonOther.text};

  &:hover,
  &:active {
    background-color: ${props => props.theme.mainPage.list.buttonOther.outline};
  }
`;
