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
  BackgroundContainer,
  SearchText,
} from './Header.styled';
import { useLocation } from 'react-router-dom';
import LogOutModal from './LogOutModal/LogOutModal';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelector';

import ThemeToggle from './ThemeToggle/ThemeToggle';

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
  const onSplitPathname = pathname => {
    const result = pathname.split('/')[1];
    return result;
  };
  const path = onSplitPathname(pathname);

  const handleToggleModalUserProfile = () => {
    setToggleModalEdit(false);
    setToggleEditUser(!toggleEditUser);
  };

  const handleToggleMenu = () => {
    if (toggle) {
      body.classList.remove('isOpen');
      setToggleMenu(!toggle);
    } else {
      setToggleMenu(!toggle);
      body.classList.add('isOpen');
    }
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
            <NavListList pathname={path}>
              <NavListItem>
                <NavLinkStyle
                  pathname={path}
                  onClick={toggle ? handleToggleMenu : null}
                  to={'/categories/Beef'}
                >
                  Categories
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle
                  pathname={path}
                  onClick={toggle ? handleToggleMenu : null}
                  to={'/add'}
                >
                  Add recipes
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle
                  pathname={path}
                  onClick={toggle ? handleToggleMenu : null}
                  to={'/my'}
                >
                  My recipes
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle
                  pathname={path}
                  onClick={toggle ? handleToggleMenu : null}
                  to={'/favorite'}
                >
                  Favorites
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle
                  pathname={path}
                  onClick={toggle ? handleToggleMenu : null}
                  to={'/shopping-list'}
                >
                  Shopping list
                </NavLinkStyle>
              </NavListItem>
              <NavListItem>
                <NavLinkStyle
                  pathname={path}
                  onClick={toggle ? handleToggleMenu : null}
                  to={'/search'}
                >
                  <SearchIcon pathname={path} />
                  {!screenWidth && <SearchText>Search</SearchText>}
                </NavLinkStyle>
              </NavListItem>
            </NavListList>
            <ThemeToggle />
          </SiteNav>

          <MobileHeaderBlock>
            {!toggle || screenWidth ? (
              <>
                <UserAvatar src={user.avatarUrl} alt="User avatar" />
                <UserName
                  pathname={path}
                  onClick={() => {
                    setToggleModalEdit(!toggleModalEdit);
                  }}
                >
                  {user.name}
                </UserName>
              </>
            ) : null}
            <MenuButton onClick={handleToggleMenu}>
              {toggle ? (
                <CloseIcon />
              ) : (
                <MenuIcon pathname={path} screenWidth />
              )}
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
