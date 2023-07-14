import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TitleStyled = styled.h1`
  color: #001833;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.88px;
  margin-bottom: 32px;
  text-align: start;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;
export const LinkStyled = styled(NavLink)`
  color: #fafafa;
  margin-left: auto;
  display: inline-block;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  border-radius: 6px;
  background: #8aa936;
  padding: 10px 24px;

  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;
export const WrapperStyled = styled.div`
  text-align: end;

  padding: 21px 0;
  @media (min-width: 768px) {
    padding: 25px 0;
    gap: 32px;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
    gap: 14px;
    row-gap: 100px;
    padding: 50px 0;
  }
`;
