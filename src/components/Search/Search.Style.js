import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Button = styled(NavLink)`
  position: absolute;
  right: 0;
  background-color: ${props => props.theme.mainPage.menuMobileModal.text};
  color: ${props => props.theme.addRecipePage.recipePreparation.button.text};
  border-radius: 24px 44px;
  border: none;
  text-align: center;
  padding: 17px 48px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-width: 161px;
  }
  @media screen and (min-width: 768px) {
    width: 342px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    padding: 25px 48px;
    height: 71px;
  }
`;
export const InputSearchStyled = styled.input`
  background-color: ${({ theme }) => theme.mainPageTitle.background};
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  width: 295px;
  height: 52px;

  padding-left: 32px;
  position: relative;

  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  &:focus {
    border-color: #f0f0f0;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 342px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    width: 483px;
    height: 71px;
  }
`;
export const DivStyled = styled.div`
  display: flex;
  height: 52px;
  position: relative;
`;
