import { styled } from 'styled-components';

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
  @media screen and (min-width: 768px) {
    line-height: 26px;
    font-size: 18px;
    padding: 20px;
  }
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
  padding: 0 16px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  padding-bottom: 24px;
  padding-top: 24px;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;

  border-bottom: 1px solid
    ${props => props.theme.shoppingListPage.product.list.underline};
  color: ${props => props.theme.shoppingListPage.product.list.text};
`;

export const ImageSection = styled.div`
  display: flex;
  p {
    margin-left: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  padding: 6px;

  border-radius: 6px;
  background-color: ${props =>
    props.theme.shoppingListPage.product.list.pictureBackground};
`;

export const DataSection = styled.div`
  display: flex;
`;

export const Number = styled.div`
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-radius: 4px;
  background-color: ${props =>
    props.theme.shoppingListPage.product.number.background};
  color: ${props => props.theme.shoppingListPage.product.number.text};
  padding: 4px;
`;

export const CloseIcon = styled.div`
  align-self: flex-start;
  margin-right: 20px;
  margin-left: 46px;
  stroke: ${props => props.theme.shoppingListPage.product.icon};
  &:hover {
    stroke: ${props => props.theme.shoppingListPage.product.hoverIcon};
  }

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
