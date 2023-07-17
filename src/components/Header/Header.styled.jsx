import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import bgImg from '../../images/Header/spinach.png';
// import bgImgTablet from '../../images/Header/spinach@2x.png';
// import SwitchImg from '../../images/Header/Switch.png';
// import SwitchBodyImg from '../../images/Header/switch-body.png';

export const HeaderContainer = styled.div`
  width: var(--small-screen);
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 105;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: var(--medium-screen);
  }
  @media screen and (min-width: 1440px) {
    width: var(--large-screen);
    padding: 18px 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const MobileHeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 24px;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserAvatar = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 24px;
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.p`
  font-size: 12px;
  line-height: 20.4px;
  font-weight: 600;
  margin-left: 14px;
  cursor: pointer;
  color: ${props => {
    if (props.pathname === 'recipe') {
      return props.theme.mainPage.header.user.textRecipePage;
    }
    return props.theme.mainPage.header.user.text;
  }};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    margin-right: 158px;
  }
`;
export const SiteNav = styled.nav`
  display: ${props => {
    if (props.toggle === 'true') {
      return 'flex';
    }
    return 'none';
  }};

  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh;

  padding-top: 124px;

  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    display: flex;
    position: static;
    height: 100%;
    padding-top: 0px;
    background-image: none;
    flex-direction: row;
  }
`;
export const NavListList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 30px;
    }
  }
`;
export const NavLinkStyle = styled(NavLink)`
  z-index: 110;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: ${props => props.theme.mainPage.header.nav.text};

  &.active {
    color: ${props => props.theme.mainPage.header.nav.hover};
  }
  &:hover {
    color: ${props => props.theme.mainPage.header.nav.hover};
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 22.4px;
  }
`;

export const LinkStyle = styled(Link)`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;

export const BackgroundContainer = styled.header`
  z-index: 99;
  background-image: url(${bgImg});
  background-image: ${props => {
    if (props.toggle !== 'true') {
      return 'none';
    }
    return;
  }};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  height: ${props => {
    if (props.toggle === 'true') {
      return '100vh';
    }
    return;
  }};
  background-color: ${props => {
    if (props.toggle === 'true') {
      return props.theme.mainPage.menuMobileModal.background;
    }
    return 'transparent';
  }};
  @media screen and (min-width: 1440px) {
    background: none;
    /* height: 80px;
    width: 1240px; */
    margin-left: auto;
    margin-right: auto;
  }
`;
export const SearchText = styled.span`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
