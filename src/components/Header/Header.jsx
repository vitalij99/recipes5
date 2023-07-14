import SwitchImg from '../../images/Header/Switch.png';
import SwitchBodyImg from '../../images/Header/switch-body.png';
import UserProfile from './UserProfile/UserProfile';

import { HeaderLogo } from './HeaderIcon/HeaderIcon';
import { MenuIcon } from './HeaderIcon/HeaderIcon';
import { CloseIcon } from './HeaderIcon/HeaderIcon';
import { SearchIcon } from './HeaderIcon/HeaderIcon';
import ModalHeaderEdit from './ModalHeaderEdit/ModalHeaderEdit';
import { useState } from 'react';
import {
  HeaderContainer,
  MobileHeaderBlock,
  MenuButton,
  UserAvatar,
  UserName,
  SiteNav,
  NavListItem,
  NavLinkStyle,
  NavListList,
  LinkStyle,
  ThemeToggle,
  SwitchStyled,
  BackgroundContainer,
  SearchText,
} from './Header.styled';
import { useLocation } from 'react-router-dom';
import LogOutModal from './LogOutModal/LogOutModal';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelector';

const Header = () => {
  const onScreenWidth = () => {
    if (window.screen.width >= 1440) {
      return true;
    } else {
      return false;
    }
  };

  const { pathname } = useLocation();
  const user = useSelector(selectAuthUser);
  const screenWidth = onScreenWidth();
  const [toggle, setToggleMenu] = useState(false);
  const [toggleEditUser, setToggleEditUser] = useState(false);
  const [toggleModalEdit, setToggleModalEdit] = useState(false);
  const [toggleModalLogOut, setToggleModalLogOut] = useState(false);
  const body = document.querySelector('body');

  // const onHidden = () => {
  //   if (toggle) {

  //   }
  // };
  const handleToggleModalUserProfile = () => {
    setToggleModalEdit(false);
    setToggleEditUser(!toggleEditUser);
  };

  const handleToggleMenu = () => {
    if (screenWidth) {
      return;
    }
    if (!toggle) {
      body.style.overflow = 'visible';
    }
    body.style.overflow = 'hidden';
    setToggleMenu(!toggle);
  };

  const handleToggleModalLogOut = () => {
    setToggleModalEdit(false);
    setToggleModalLogOut(!toggleModalLogOut);
  };

  return (
    <>
      <BackgroundContainer toggle={toggle.toString()}>
        <HeaderContainer pathname={pathname} toggle={toggle.toString()}>
          <LinkStyle to="/">
            <HeaderLogo />
          </LinkStyle>

          <SiteNav toggle={toggle.toString()}>
            <NavListList>
              <NavListItem>
                <NavLinkStyle
                  onClick={handleToggleMenu}
                  to={'/categories/:breakfast'}
                >
                  Categories
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle onClick={handleToggleMenu} to={'/add'}>
                  Add recipes
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle onClick={handleToggleMenu} to={'/my'}>
                  My recipes
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle onClick={handleToggleMenu} to={'/favorite'}>
                  Favorites
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle onClick={handleToggleMenu} to={'/shopping-list'}>
                  Shopping list
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle onClick={handleToggleMenu} to={'/search'}>
                  <SearchIcon />
                  {!screenWidth && <SearchText>Search</SearchText>}
                </NavLinkStyle>
              </NavListItem>
            </NavListList>
            <ThemeToggle>
              <img src={SwitchBodyImg} alt="Switch Body" />

              <SwitchStyled>
                <img src={SwitchImg} alt="Switch" />
              </SwitchStyled>
            </ThemeToggle>
          </SiteNav>

          <MobileHeaderBlock>
            {!toggle || screenWidth ? (
              <>
                <UserAvatar src={user.avatarUrl} alt="User avatar" />
                <UserName
                  pathname={pathname}
                  onClick={() => {
                    setToggleModalEdit(!toggleModalEdit);
                  }}
                >
                  {user.name}
                </UserName>
              </>
            ) : null}
            <MenuButton onClick={handleToggleMenu}>
              {toggle ? <CloseIcon /> : <MenuIcon />}
            </MenuButton>
          </MobileHeaderBlock>
        </HeaderContainer>
      </BackgroundContainer>
      {toggleModalEdit && (
        <ModalHeaderEdit
          setToggleModalEdit={setToggleModalEdit}
          handleToggleModalLogOut={handleToggleModalLogOut}
          handleToggleModalUserProfile={handleToggleModalUserProfile}
        />
      )}
      {toggleModalLogOut && (
        <LogOutModal handleToggleModalLogOut={handleToggleModalLogOut} />
      )}
      {toggleEditUser && (
        <UserProfile
          handleToggleModalUserProfile={handleToggleModalUserProfile}
          toggleEditUser={toggleEditUser}
          setToggleEditUser={setToggleEditUser}
        />
      )}
    </>
  );
};

export default Header;
