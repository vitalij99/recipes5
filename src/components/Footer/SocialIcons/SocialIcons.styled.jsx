import styled from 'styled-components';
import {
  FooterFacebookLogo,
} from '../FooterIcon';

export const FooterFacebookLogoStyled = styled(FooterFacebookLogo)`
  fill: #fff;
  color: #fff;
  background-color: #fafafa;
      width: 30px;
`;


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const LinkSocial = styled.a`
  &:not(:last-child) {
    margin-right: 14px;
  }

   @media (min-width: 768px) {
     &:not(:last-child) {
    margin-right: 18px;
  }
  }
`;