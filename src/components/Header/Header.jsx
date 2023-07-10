import { HeaderLogo } from './HeaderIcon/HeaderIcon';
import { MenuIcon } from './HeaderIcon/HeaderIcon';
import { CloseIcon } from './HeaderIcon/HeaderIcon';
import { SearchIcon } from './HeaderIcon/HeaderIcon';
import { SwitchBody } from './HeaderIcon/HeaderIcon';
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
} from './Header.styled';

const Header = () => {
  const screenWidth = window.screen.width;

  const [toggleMenu, setToggleMenu] = useState(() => {
    if (screenWidth >= 1440) {
      return true;
    }
    return false;
  });

  const imgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';

  const handleToggleMenu = () => {
    if (screenWidth >= 1440) {
      return;
    }
    setToggleMenu(!toggleMenu);
  };

  return (
    <HeaderContainer
      style={{
        backgroundColor:
          toggleMenu && screenWidth <= 1440 ? '#EBF3D4' : '#FAFAFA',
      }}
    >
      <LinkStyle to="/">
        <HeaderLogo />
      </LinkStyle>

      {toggleMenu && (
        <SiteNav>
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
              <NavLinkStyle onClick={handleToggleMenu} to={'/recipe/:recipeId'}>
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
                {screenWidth <= 1440 && 'Search'}
              </NavLinkStyle>
            </NavListItem>
          </NavListList>
          <ThemeToggle>
            <SwitchBody />
          </ThemeToggle>
        </SiteNav>
      )}
      <MobileHeaderBlock>
        {!toggleMenu || screenWidth > 1440 ? (
          <>
            <UserAvatar src={imgSrc} alt="User avatar" />
            <UserName>UserName</UserName>
          </>
        ) : null}
        <MenuButton onClick={handleToggleMenu}>
          {toggleMenu ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </MobileHeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
