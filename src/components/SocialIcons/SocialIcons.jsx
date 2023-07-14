import {
  Title,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  IconContainer,
  LinkSocial,
} from './SocialIcons.styled';

const SocialIcons = ({ className, title }) => {
  return (
    <div className={className}>
      {title ? <Title>{title}</Title> : null}
      <IconContainer>
        <LinkSocial href="https://www.facebook.com/" target="_blank">
          <FacebookLogo />
        </LinkSocial>
        <LinkSocial href="https://www.youtube.com/" target="_blank">
          <YoutubeLogo />
        </LinkSocial>
        <LinkSocial href="https://twitter.com/" target="_blank">
          <TwitterLogo />
        </LinkSocial>
        <LinkSocial href="https://www.instagram.com/" target="_blank">
          <InstagramLogo />
        </LinkSocial>
      </IconContainer>
    </div>
  );
};

export default SocialIcons;
