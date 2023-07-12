import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import banner from 'images/mainPage/arr.png';

export const InformWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  position: absolute;
  width: 225px;
  background-color: ${({ theme }) => theme.mainPageTitle.background};
  border-radius: 8px;
  top: 428px;
  right: 20%;
  z-index: 2;

  @media screen and (min-width: 768px) {
    &::after {
      content: '';
      width: 167px;
      height: 89px;
      position: absolute;
      transform: translate(20px, 120%);

      background-image: url(${banner});
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 251px;
    padding: 16px;
    top: 510px;
    right: 200px;
  }
`;
export const TextfStyled = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.mainPageTitle.particle};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BtnWrapperStyled = styled(NavLink)`
  margin-left: auto;
  cursor: pointer;
  color: ${({ theme }) => theme.mainPageTitle.particle};
`;

export const BtnTextStyled = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  margin: 0;
`;
