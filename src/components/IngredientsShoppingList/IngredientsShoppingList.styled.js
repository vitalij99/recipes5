import { styled } from 'styled-components';
//${props =>
//     props.theme.mainPage.menuModal.background};

export const Section = styled.div`
  background-color: ${props => props.theme.shoppingListPage.background};
`;

export const Titles = styled.div`
  color: ${props => props.theme.shoppingListPage.product.titles.text};
  background-color: ${props =>
    props.theme.shoppingListPage.product.titles.background};
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 10px;

  border-radius: 8px;
  font-family: 'Poppins';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export const TitlesContainer = styled.div`
  display: flex;
  div {
    margin-left: 24px;
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  margin-bottom: 100px;
`;
