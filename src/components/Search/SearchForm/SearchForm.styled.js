import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 295px;

  @media screen and (min-width: 768px) {
    width: 362px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;

export const Form = styled.form`
  /* position: relative; */
`;

export const FormInput = styled.input`
  border-radius: 24px 44px;
  width: 295px;
  padding: 16px 32px;

  outline: ${props => props.theme.searchPage.searchBar.outline} 1px solid;
  border: none;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    outline: ${props => props.theme.searchPage.searchBar.outline} 1px solid;
  }
  &:focus {
    outline: ${props => props.theme.searchPage.searchBar.hoverOutline} 1px solid;
  }

  @media screen and (min-width: 768px) {
    width: 362px;

    font-size: 14px;

    padding: 17.7px 38px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;

    font-size: 16px;

    padding: 23px 48px;
  }
`;

export const FormButton1 = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 24px 44px;
  padding: 14.7px 32px;

  outline: none;
  border: none;

  color: ${props => props.theme.searchPage.searchBar.button.text};
  background-color: ${props => props.theme.searchPage.searchBar.button.fill};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background-color: ${props =>
      props.theme.searchPage.searchBar.button.hoverFill};
  }

  @media screen and (min-width: 768px) {
    width: 161px;

    padding: 16px 52px;

    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;

    padding: 23px 52px;
  }
`;

export const FormButton2 = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 24px 44px;
  padding: 14.7px 32px;

  outline: none;
  border: none;

  color: ${props => props.theme.mainPage.hero.search.button.text};
  background-color: ${props => props.theme.mainPage.hero.search.button.fill};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background-color: ${props =>
      props.theme.mainPage.hero.search.button.hoverFill};
  }

  @media screen and (min-width: 768px) {
    width: 161px;

    padding: 16px 52px;

    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;

    padding: 23px 52px;
  }
`;
