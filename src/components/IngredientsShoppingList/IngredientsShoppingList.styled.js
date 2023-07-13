import { styled } from 'styled-components';

export const Section = styled.div`
  /* background-color: ${props => props.theme.shoppingListPage.background}; */
  flex: 1;
  /* min-height: 310px; */
  height: 100%;
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

    margin-left: 32px;
    margin-right: 32px;

    padding: 16px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 100px;

    padding: 21px 40px;
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  div {
    margin-left: 24px;

    @media screen and (min-width: 768px) {
      margin-left: 78px;
    }

    @media screen and (min-width: 1440px) {
      margin-left: 142px;
    }
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 140px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  padding-bottom: 24px;
  &:not(:first-child) {
    padding-top: 24px;
  }

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;

  border-bottom: 1px solid
    ${props => props.theme.shoppingListPage.product.list.underline};
  color: ${props => props.theme.shoppingListPage.product.list.text};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;

    padding-bottom: 44px;
    &:not(:first-child) {
      padding-top: 44px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 43px;
    &:not(:first-child) {
      padding-top: 43px;
    }
  }
`;

export const ImageSection = styled.div`
  display: flex;
  p {
    margin-left: 10px;

    @media screen and (min-width: 768px) {
      margin-left: 16px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  padding: 6px;

  border-radius: 6px;
  background-color: ${props =>
    props.theme.shoppingListPage.product.list.pictureBackground};

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
  }
`;

export const DataSection = styled.div`
  display: flex;
`;

export const Number = styled.div`
  background-color: ${props =>
    props.theme.shoppingListPage.product.number.background};
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  text-align: center;

  padding: 4px;
  min-width: 37px;

  border-radius: 4px;

  font-size: 10px;
  color: ${props => props.theme.shoppingListPage.product.number.text};

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    min-width: 68px;
    line-height: normal;
    font-size: 18px;
  }
`;

export const CloseIcon = styled.div`
  align-self: flex-start;
  margin-right: 19px;
  margin-left: 46px;

  stroke: ${props => props.theme.shoppingListPage.product.icon};
  &:hover {
    stroke: ${props => props.theme.shoppingListPage.product.hoverIcon};
  }

  @media screen and (min-width: 768px) {
    margin-right: 45px;
    margin-left: 110px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 28px;
    margin-left: 174px;
  }

  svg {
    &:hover {
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
