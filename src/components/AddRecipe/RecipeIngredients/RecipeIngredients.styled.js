import styled from 'styled-components';
import Select from 'react-select';

export const Form = styled.div`
  margin-top: 44px;
  margin-bottom: 44px;
  outline: 1px solid red;
  /* REMOVE */

  display: flex;
  flex-direction: column;
  width: 343px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
    gap: 32px;
    margin-top: 104px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const IngredietsContainer = styled.div`
  width: 100%;
  border: none;
`;

export const IngredietsBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content: space-between;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
`;

export const BtnBox = styled.div`
  display: flex;
  border-radius: 18px;
  border: 1px solid
    ${props => props.theme.addRecipePage.listOfIngredients.counter};
  width: 92px;
  height: 28px;
  flex-shrink: 0;
`;

export const BtnCountMinus = styled.button`
  border: none;
  background-color: transparent;
  margin: auto;
  color: ${props => props.theme.addRecipePage.listOfIngredients.button.text};
`;

export const BtnCountPlus = styled.button`
  border: none;
  background-color: transparent;
  margin: auto;
  color: ${props =>
    props.theme.addRecipePage.recipePreparation.button.hoverFill};
`;

export const Count = styled.span`
  color: ${props => props.theme.addRecipePage.listOfIngredients.button.text};
  align-items: center;
  display: flex;
  font-family: Inter;
  font-size: 14px;
  line-height: 18px;
`;

export const ListIngredients = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const ItemIngredient = styled.li`
  position: relative;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const SelectStyled = styled(Select)`
  & .css-13cymwt-control {
    border: 1px solid
      ${props => props.theme.addRecipePage.recipePreparation.outline};
    background-color: ${props =>
      props.theme.addRecipePage.listOfIngredients.selectionBackground};
  }

  & .css-1xc3v61-indicatorContainer {
    color: ${props => props.theme.addRecipePage.listOfItems.icon};
  }

  width: 194px;

  @media screen and (min-width: 768px) {
    width: 398px;
  }

  @media screen and (min-width: 1440px) {
    width: 617px;
  }
`;

export const InputAmount = styled.input`
  display: flex;
  width: 40px;
  height: 38px;
  border: none;
  background-color: ${props =>
    props.theme.addRecipePage.listOfIngredients.selectionBackground};
`;

export const InputBox = styled.div`
  display: flex;
  border: 1px solid
    ${props => props.theme.addRecipePage.recipePreparation.outline};
  border-radius: 4px;
`;

export const SelectAdd = styled.select`
  border: none;
  background-color: ${props =>
    props.theme.addRecipePage.listOfIngredients.selectionBackground};
  color: ${props => props.theme.addRecipePage.listOfIngredients.hoverIcon1};
`;
