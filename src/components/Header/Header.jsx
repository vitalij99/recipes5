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
  ThemeTogle,
} from './Header.styled';

const Header = () => {
  const screenWidth = window.screen.width;

  const [togleMenu, setTogleMenu] = useState(() => {
    if (screenWidth >= 1440) {
      return true;
    }
    return false;
  });
  console.log('🚀 ~ screenWidth:', screenWidth);
  const imgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';

  return (
    <HeaderContainer
      style={{
        backgroundColor:
          togleMenu && screenWidth <= 1440 ? '#EBF3D4' : '#FAFAFA',
      }}
    >
      <LinkStyle to="/">
        <HeaderLogo />
      </LinkStyle>

      {togleMenu && (
        <SiteNav>
          <NavListList>
            <NavListItem>
              <NavLinkStyle to={'/categories/:categoryName'}>
                Categories
              </NavLinkStyle>
            </NavListItem>
            <NavListItem>
              <NavLinkStyle to={'/add'}>Add recipes</NavLinkStyle>
            </NavListItem>
            <NavListItem>
              <NavLinkStyle to={'/recipe/:recipeId'}>My recipes</NavLinkStyle>
            </NavListItem>
            <NavListItem>
              <NavLinkStyle to={'/favorite'}>Favorites</NavLinkStyle>
            </NavListItem>
            <NavListItem>
              <NavLinkStyle to={'/shopping-list'}>Shopping list</NavLinkStyle>
            </NavListItem>
            <NavListItem>
              <NavLinkStyle to={'/search'}>
                <SearchIcon />
                {screenWidth <= 1440 && 'Search'}
              </NavLinkStyle>
            </NavListItem>
          </NavListList>
          <ThemeTogle>
            <SwitchBody />
          </ThemeTogle>
        </SiteNav>
      )}
      <MobileHeaderBlock>
        {!togleMenu || screenWidth > 1440 ? (
          <>
            <UserAvatar src={imgSrc} alt="User avatar" />
            <UserName>UserName</UserName>
          </>
        ) : null}
        <MenuButton
          onClick={() => {
            setTogleMenu(!togleMenu);
          }}
        >
          {togleMenu ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </MobileHeaderBlock>
    </HeaderContainer>
  );
};

export default Header;
