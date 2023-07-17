import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TitleStyled = styled.h1`
  color: ${props => props.theme.mainPage.list.title};
  font-size: 44px;
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
  font-size: 14px;
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
  width: 343px;
  margin: 0 auto;
  padding: 21px 0;

  @media (min-width: 768px) {
    width: 704px;
    padding: 25px 0;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    width: 1250px;
    gap: 14px;
    row-gap: 100px;
    padding: 50px 0;
  }
`;
