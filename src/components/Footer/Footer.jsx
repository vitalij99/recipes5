import {
  BottomFooter,
  Copyright,
  TermsofService,
  FooterContainer,
  FooterInfo,
  FooterFacebookLogoStyled,
  LinkSocial,
  IconContainer,
  FooterButton,
  Form,
  Input,
  NavLinkItem,
  LinkStyle,
  NavLinkList,
  FooterLogoText,
  FooterLogoContainer,
  LogoWrapper,
} from './Footer.styled';

import {
  FooterLogo,
  // FooterEmailLogo,
  // FooterFacebookLogo,
  FooterYoutubeLogo,
  FooterTwitterLogo,
  FooterInstagramLogo,
} from './FooterIcon';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterLogoContainer>
          <LogoWrapper>
            <FooterLogo />
          </LogoWrapper>

          <FooterLogoText>So Yummy</FooterLogoText>
        </FooterLogoContainer>
        <NavLinkList>
          <NavLinkItem>
            <LinkStyle to={'/categories/:categoryName'}>Categories</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/add'}>Add recipes</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/recipe/:recipeId'}>My recipes</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/favorite'}>Favorites</LinkStyle>
          </NavLinkItem>
          <NavLinkItem>
            <LinkStyle to={'/shopping-list'}>Shopping list</LinkStyle>
          </NavLinkItem>
        </NavLinkList>

        <Form action="subscribe">
          <Input type="email" placeholder="Enter your email address" />
          <FooterButton type="submit">Subscribe</FooterButton>
        </Form>
        <IconContainer>
          <LinkSocial href="https://www.facebook.com/">
            <FooterFacebookLogoStyled />
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
      </FooterInfo>
      <BottomFooter>
        <Copyright>© 2023 All Rights Reserved.</Copyright>
        <TermsofService>Terms of Service</TermsofService>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
