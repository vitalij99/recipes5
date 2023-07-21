import {
  BottomFooter,
  Copyright,
  TermsofService,
  FooterInfo,
  FooterButton,
  Form,
  ContainerSvg,
  Input,
  NavLinkItem,
  LinkStyle,
  NavLinkList,
  FooterLogoText,
  FooterLogoContainer,
  LogoWrapper,
  TextContainer,
  OptionsList,
  OptionsItem,
  SubscribeContainer,
  SubscribeTitle,
  SubscribeText,
  MainContainer,
  HeadContainer,
  InputBox,
  NavLinkDiv,
  BackContainer,
} from './Footer.styled';

import { FooterLogo, FooterEmailLogo } from './FooterIcon';

import Container from 'components/Container/Container';
import { StyledSocialIcons } from './SocialIcons/SocialIcons.styled';
import axios from 'axios';
import { Notify } from 'notiflix';

import { useEffect, useState } from 'react';
import ModalTeam from 'components/ModalTeam/ModalTeam';

const Footer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!isOpenModal) {
      document.body.classList.remove('isOpen');
    }
  }, [isOpenModal]);

  function handleModalTeam(e) {
    setIsOpenModal(true);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { imputEmail } = event.target.elements;

    const fetsh = async () => {
      await axios.patch('/users/subscribe', {
        inputEmail: imputEmail.value,
      });
    };
    if (imputEmail.value.length > 0) {
      try {
        fetsh();
        Notify.success(`${imputEmail} subscribe`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      {isOpenModal && (
        <ModalTeam onClose={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
      <BackContainer>
        <Container>
          <FooterInfo>
            <MainContainer>
              <TextContainer>
                <HeadContainer>
                  <FooterLogoContainer>
                    <LogoWrapper to="/">
                      <FooterLogo />
                    </LogoWrapper>

                    <FooterLogoText>So Yummy</FooterLogoText>
                  </FooterLogoContainer>

                  <OptionsList>
                    <OptionsItem>
                      Database of recipes that can be replenished
                    </OptionsItem>
                    <OptionsItem>
                      Flexible search for desired and unwanted ingredients
                    </OptionsItem>
                    <OptionsItem>
                      Ability to add your own recipes with photos
                    </OptionsItem>
                    <OptionsItem>Convenient and easy to use</OptionsItem>
                  </OptionsList>
                </HeadContainer>

                <NavLinkDiv>
                  <NavLinkList>
                    <NavLinkItem>
                      <LinkStyle to={'/search?ingredient'}>
                        Ingredients
                      </LinkStyle>
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
                </NavLinkDiv>
              </TextContainer>

              <SubscribeContainer>
                <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
                <SubscribeText>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </SubscribeText>

                <Form onSubmit={handleSubmit}>
                  <InputBox>
                    <ContainerSvg>
                      <FooterEmailLogo />
                    </ContainerSvg>
                    <Input
                      name="imputEmail"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </InputBox>
                  <FooterButton type="submit">Subscribe</FooterButton>
                </Form>
              </SubscribeContainer>
            </MainContainer>
            <StyledSocialIcons />
          </FooterInfo>
        </Container>

        <BottomFooter>
          <Copyright>© 2023 All Rights Reserved.</Copyright>
          <TermsofService onClick={handleModalTeam}>
            Terms of Service
          </TermsofService>
        </BottomFooter>
      </BackContainer>
    </>
  );
};

export default Footer;
