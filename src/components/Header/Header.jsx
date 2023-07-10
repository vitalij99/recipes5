import SwitchImg from '../../images/Header/Switch.png';
import SwitchBodyImg from '../../images/Header/switch-body.png';

import { HeaderLogo } from './HeaderIcon/HeaderIcon';
import { MenuIcon } from './HeaderIcon/HeaderIcon';
import { CloseIcon } from './HeaderIcon/HeaderIcon';
import { SearchIcon } from './HeaderIcon/HeaderIcon';
// import { SwitchBody, Switch } from './HeaderIcon/HeaderIcon';
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
} from './Header.styled';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const onScreenWidth = () => {
    if (window.screen.width >= 1440) {
      return true;
    } else {
      return false;
    }
  };
  const { pathname } = useLocation();

  const screenWidth = onScreenWidth();

  const [toggle, setToggleMenu] = useState(() => {
    if (screenWidth) {
      return true;
    }
    return false;
  });

  const [toggleModalEdit, setToggleModalEdit] = useState(false);

  const imgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';

  const handleToggleMenu = () => {
    if (screenWidth) {
      return;
    }
    setToggleMenu(!toggle);
  };

  return (
    <HeaderContainer toggle={toggle.toString()}>
      <LinkStyle to="/">
        <HeaderLogo />
      </LinkStyle>

      {toggle && (
        <SiteNav toggle={toggle.toString()}>
          <NavListList>
            <NavListItem>
              <NavLinkStyle
                onClick={handleToggleMenu}
                to={'/categories/:categoryName'}
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
                {!screenWidth && 'Search'}
              </NavLinkStyle>
            </NavListItem>
          </NavListList>
          <ThemeToggle>
            {/* <SwitchBody /> */}
            <img src={SwitchBodyImg} alt="Switch Body" />

            <SwitchStyled>
              {/* <Switch /> */}
              <img src={SwitchImg} alt="Switch" />
            </SwitchStyled>
          </ThemeToggle>
        </SiteNav>
      )}
      <MobileHeaderBlock>
        {!toggle || screenWidth ? (
          <>
            <UserAvatar src={imgSrc} alt="User avatar" />
            <UserName
              pathname={pathname}
              onClick={() => {
                setToggleModalEdit(!toggleModalEdit);
              }}
            >
              UserName
            </UserName>
          </>
        ) : null}
        <MenuButton onClick={handleToggleMenu}>
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </MobileHeaderBlock>
      {toggleModalEdit && <ModalHeaderEdit />}
    </HeaderContainer>
  );
};

export default Header;
