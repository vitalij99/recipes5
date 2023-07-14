import {
LinkSocial,
IconContainer,
} from './SocialIcons.styled';

import {
  FooterYoutubeLogo,
  FooterTwitterLogo,
    FooterInstagramLogo,
  FooterFacebookLogo
} from '../FooterIcon';

export const SocialIcons = () => {
  return (
      <IconContainer>
          <LinkSocial href="https://www.facebook.com/">
            <FooterFacebookLogo />
          </LinkSocial>
          <LinkSocial href="https://www.youtube.com/">
            <FooterYoutubeLogo />
          </LinkSocial>
          <LinkSocial href="https://twitter.com/">
            <FooterTwitterLogo />
          </LinkSocial>
          <LinkSocial href="https://www.instagram.com/">
            <FooterInstagramLogo />
          </LinkSocial>
    </IconContainer>
  );
};

export default SocialIcons;