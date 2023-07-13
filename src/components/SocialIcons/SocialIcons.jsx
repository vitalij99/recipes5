import {
  Title,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  IconContainer,
  LinkSocial,
} from './SocialIcons.styled';

const SocialIcons = ({ className, title, container, link, logo }) => {
  return (
    <div className={className}>
      {title ? <Title>{title}</Title> : null}
      <IconContainer className={container}>
        <LinkSocial href="https://www.facebook.com/" className={link}>
          <FacebookLogo className={logo} />
        </LinkSocial>
        <LinkSocial href="https://www.youtube.com/" className={link}>
          <YoutubeLogo className={logo} />
        </LinkSocial>
        <LinkSocial href="https://twitter.com/" className={link}>
          <TwitterLogo className={logo} />
        </LinkSocial>
        <LinkSocial href="https://www.instagram.com/" className={link}>
          <InstagramLogo className={logo} />
        </LinkSocial>
      </IconContainer>
    </div>
  );
};

export default SocialIcons;
