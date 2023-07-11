import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImg from '../../images/Header/spinachFooter.png';

import {
  // FooterLogo,
  // FooterEmailLogo,
  FooterFacebookLogo,
  // FooterYoutubeLogo,
  // FooterTwitterLogo,
  // FooterInstagramLogo,
} from './FooterIcon';

export const BottomFooter = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${bgImg});
  background-position: bottom right;
  background-repeat: no-repeat;
`;

export const Copyright = styled.p`
  color: ${props => props.theme.mainPage.footer.bottomText.text};
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.1px;
  opacity: 0.5;
  margin-right: 14px;
  &:hover {
    color: ${props => props.theme.mainPage.footer.bottomText.hoverText};
  }
`;

export const TermsofService = styled.p`
  color: ${props => props.theme.mainPage.footer.bottomText.text};
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.1px;
  &:hover {
    color: ${props => props.theme.mainPage.footer.bottomText.hoverText};
  }
`;
export const FooterContainer = styled.div`
  height: 369px;
  width: 100%;
  background-color: ${props => props.theme.mainPage.footer.background};
`;
export const FooterInfo = styled.div`
  width: 100%;
  background-color: ${props => props.theme.mainPage.footer.background};
  padding: 28px 18px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const FooterFacebookLogoStyled = styled(FooterFacebookLogo)`
  fill: #fff;
  color: #fff;
  background-color: #fafafa;
`;
export const LinkSocial = styled.a`
  &:not(:last-child) {
    margin-right: 14px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterButton = styled.button`
  padding: 11px 67px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background-color: ${props => props.theme.mainPage.footer.button.fill};
  color: ${props => props.theme.mainPage.footer.button.text};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 44px;
  &:hover {
    background-color: ${props => props.theme.mainPage.footer.button.hoverFill};
  }
`;
export const Input = styled.input`
  width: 204px;
  height: 38px;
  flex-shrink: 0;
  opacity: 0.15700000524520874;
  border-radius: 8px;
  margin-bottom: 8px;

  ::placeholder {
    letter-spacing: -0.02em;
    font-weight: 400;
    font-size: 10px;
    font-style: normal;
    line-height: 1.5;
    text-transform: none;
    color: ${props => props.theme.mainPage.footer.button.text};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkStyle = styled(Link)`
  color: ${props => props.theme.mainPage.footer.text};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

export const NavLinkItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const NavLinkList = styled.ul`
  margin-bottom: 32px;
`;

export const FooterLogoText = styled.p`
  color: ${props => props.theme.mainPage.footer.title};
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.27px;
  margin-left: 8px;
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 32px;
  height: 32px;

  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  background: ${props => props.theme.mainPage.footer.logo.background};
`;
