import styled from 'styled-components';
import { FooterFacebookLogo } from '../FooterIcon';

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

  ${TwitterLogo} {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.mainPage.footer.iconsList.color};
    &:hover {
      fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
    }
  }

  ${YoutubeLogo} {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.mainPage.footer.iconsList.color};
    &:hover {
      fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
    }
  }
`;

export { StyledSocialIcons };
