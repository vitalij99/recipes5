import styled from 'styled-components';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Title = styled.h3`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-bottom: 32px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkSocial = styled.a`
  &:not(:last-child) {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 18px;
    }
  }
`;

const FacebookLogo = styled(FaFacebook)``;

const InstagramLogo = styled(FaInstagram)``;

const TwitterLogo = styled(FaTwitter)``;

const YoutubeLogo = styled(FaYoutube)``;

export {
  Title,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  IconContainer,
  LinkSocial,
};
