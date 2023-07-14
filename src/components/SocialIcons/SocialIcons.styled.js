import styled from 'styled-components';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.24px;
  margin-bottom: 40px;
  color: ${props => props.theme.addRecipePage.followUs.title};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

const LinkSocial = styled.a`
  display: block;
  width: 26px;
  height: 26px;
`;

const FacebookLogo = styled(FaFacebook)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.mainPage.footer.iconsList.color};

  &:hover {
    fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
  }
`;

const InstagramLogo = styled(FaInstagram)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.mainPage.footer.iconsList.color};

  &:hover {
    fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
  }
`;

const TwitterLogo = styled(FaTwitter)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.mainPage.footer.iconsList.color};

  &:hover {
    fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
  }
`;

const YoutubeLogo = styled(FaYoutube)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.mainPage.footer.iconsList.color};

  &:hover {
    fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
  }
`;

export {
  Title,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  IconContainer,
  LinkSocial,
};
