import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImg from '../../images/Header/spinachFooter.png';

export const BackContainer = styled.div`
  background-color: ${props => props.theme.mainPage.footer.background};
`;

export const InputBox = styled.div`
  position: relative;
  display: inline-block;
  svg {
    fill: ${props => props.theme.mainPage.footer.background};
  }

  &:hover,
  &:focus {
    input {
      border: 1px solid ${props => props.theme.mainPage.footer.logo.icon};
      transition: 0.6s;
      animation: easeIn;

      &::placeholder {
        color: ${props => props.theme.mainPage.footer.logo.icon};
        transition: 0.6s;
        animation: easeIn;
      }
    }
    svg {
      path {
        stroke: ${props => props.theme.mainPage.footer.logo.icon};
        transition: 0.6s;
        animation: easeIn;
      }
    }
  }

  &:not(:hover),
  &:not(:focus) {
    input {
      transition: 0.6s;
      animation: easeOut;
      &::placeholder {
        transition: 0.6s;
        animation: easeOut;
      }
    }
    svg {
      path {
        transition: 0.6s;
        animation: easeIn;
      }
    }
  }
`;

export const NavLinkDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomFooter = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${bgImg});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.mainPage.footer.backgroundBottom};

  padding-top: 28px;
  padding-bottom: 28px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media (min-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const MainContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeadContainer = styled.div``;

export const Copyright = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.1px;
  opacity: 0.5;
  margin-right: 14px;
  color: ${props => props.theme.mainPage.footer.bottomText.text};
  &:hover {
    color: ${props => props.theme.mainPage.footer.bottomText.hoverText};
  }

  @media (min-width: 768px) {
    font-size: 14px;
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

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const FooterContainer = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.mainPage.footer.background};
`;
export const FooterInfo = styled.div`
  background-color: ${props => props.theme.mainPage.footer.background};
  padding-top: 28px;
  padding-bottom: 18px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
  }
`;

export const FooterButton = styled.button`
  cursor: pointer;
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
  border: none;

  &:hover {
    background-color: ${props => props.theme.mainPage.footer.button.hoverFill};
    color: ${props => props.theme.mainPage.footer.button.hoverText};
  }

  @media (min-width: 768px) {
    padding: 16px 50px;
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    padding: 21px 126px;
    width: 339px;
  }
`;

export const ContainerSvg = styled.div`
  position: absolute;
  top: 45%;
  left: 16px;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    top: 44%;
    left: 15px;
  }

  @media (min-width: 1440px) {
    top: 43%;
    left: 17px;
  }
`;

export const SubscribeContainer = styled.div`
  @media (min-width: 1440px) {
    display: block;
    width: 339px;
    margin-right: 100px;
  }
`;

export const SubscribeTitle = styled.h2`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${props => props.theme.mainPage.footer.text};
    margin-bottom: 14px;
    text-align: initial;
  }
`;

export const SubscribeText = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.mainPage.footer.text};
    margin-bottom: 28px;
    text-align: initial;
  }
`;

export const Input = styled.input`
  width: 204px;
  height: 38px;
  padding-left: 45px;
  font-size: 10px;
  color: ${props => props.theme.mainPage.footer.text};
  border: 1px solid #fafafa;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${props => props.theme.mainPage.footer.background};

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.mainPage.footer.text};
    line-height: 15px;
  }

  @media (min-width: 768px) {
    width: 259px;
    height: 50px;
    margin-right: 12px;
    font-size: 14px;

    &::placeholder {
      line-height: 21px;
    }
  }

  @media (min-width: 1440px) {
    width: 339px;
    height: 59px;
    margin-bottom: 16px;
    font-size: 18px;

    &::placeholder {
      line-height: 27px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: initial;
    align-items: baseline;
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const LinkStyle = styled(Link)`
  color: ${props => props.theme.mainPage.footer.text};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;

  &:hover {
    color: ${props => props.theme.mainPage.footer.hoverText};
  }
`;

export const TextContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;

export const OptionsList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding-left: 32px;
    margin-right: 175px;
    width: 424px;
    list-style: inside;
    text-align: initial;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${props => props.theme.mainPage.footer.title};
    margin-bottom: 72px;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    font-size: 18px;
    line-height: 24px;
    width: 527px;
    margin-right: 159px;
  }
`;

export const OptionsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NavLinkItem = styled.li`
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const NavLinkList = styled.ul`
  margin-bottom: 32px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
    padding-right: 78px;
  }
`;

export const FooterLogoText = styled.p`
  color: ${props => props.theme.mainPage.footer.title};
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.27px;
  margin-left: 8px;

  @media (min-width: 768px) {
    margin-left: 12px;
    font-size: 28px;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    justify-content: start;
    margin-left: 32px;
  }

  @media (min-width: 1440px) {
    justify-content: start;
    margin-left: 100px;
    margin-bottom: 40px;
  }
`;

export const LogoWrapper = styled(Link)`
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
