import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
// import { GlobalStyles } from '../../styles/GlobalStyles';

import bgImg from '../../images/Header/spinach.png';
import bgImgTablet from '../../images/Header/spinach@2x.png';

export const HeaderContainer = styled.header`
  width: var(--small-screen);
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: var(--medium-screen);
  }
  @media screen and (min-width: 1440px) {
    width: var(--large-screen);
    padding: 18px 100px;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    margin-right: 111px;
  }
`;
export const SiteNav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 85vh;
  display: flex;
  padding-top: 124px;
  justify-content: center;
  background-color: #ebf3d4;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (min-width: 768px) {
    background-image: url(${bgImgTablet});
  }
  @media screen and (min-width: 1440px) {
    position: static;
    height: 100%;
    padding-top: 0px;
    background-color: #fafafa;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: #22252a;

  &.active {
    color: #8baa36;
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
export const ThemeTogle = styled.div`
  width: 61px;
  height: 27px;
  position: absolute;
  left: 16px;
  bottom: 18px;

  @media screen and (min-width: 768px) {
    left: 32px;
    bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    left: 1340px;
    top: 24px;
  }
`;
