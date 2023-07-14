import {
  IconContainer,
  LinkSocial,
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
  InstagramLogo,
} from 'components/SocialIcons/SocialIcons.styled';

export const SocialIcons = () => {
  return (
    <IconContainer>
      <LinkSocial href="https://www.facebook.com/">
        <FacebookLogo />
      </LinkSocial>
      <LinkSocial href="https://www.youtube.com/">
        <YoutubeLogo />
      </LinkSocial>
      <LinkSocial href="https://twitter.com/">
        <TwitterLogo />
      </LinkSocial>
      <LinkSocial href="https://www.instagram.com/">
        <InstagramLogo />
      </LinkSocial>
    </IconContainer>
  );
};

export default SocialIcons;
