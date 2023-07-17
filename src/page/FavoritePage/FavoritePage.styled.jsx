import styled from 'styled-components';
export const FavoritePageWrap = styled.div`
  padding-bottom: 50px;
  background:${props => props.theme.mainPageTitle.background};
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`;