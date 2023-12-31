import styled from 'styled-components';

export const Box = styled.div`
  grid-column: 1;
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 200px;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TextAreaBox = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextArea = styled.textarea`
  width: 343px;
  height: 154px;
  resize: none;
  padding: 10px 16px;
  outline: none;
  background-color: ${props =>
    props.theme.addRecipePage.listOfIngredients.selectionBackground};
  border-color: ${props =>
    props.theme.addRecipePage.recipePreparation.textarea};
  border-radius: 6px;
  margin-bottom: 18px;
  box-sizing: border-box;
  color: ${props => props.theme.addRecipePage.recipePreparation.text2};

  &:focus-within,
  &:hover,
  &:focus {
    transition: 0.6s;
    animation: easeIn;
    border: 1px solid
      ${props => props.theme.addRecipePage.recipePreparation.textareafocus};
  }

  &:not(:focus-within),
  &:not(:hover),
  &:not(:focus) {
    transition: 0.6s;
    animation: easeOut;
  }

  &::placeholder {
    color: ${props => props.theme.addRecipePage.recipePreparation.text2};
    opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};
  }

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 505px;
  }
`;

export const Button = styled.button`
  background-color: ${props =>
    props.theme.addRecipePage.recipePreparation.button.fill};
  color: ${props => props.theme.addRecipePage.recipePreparation.button.text};
  border-radius: 24px 44px;
  border: none;
  padding: 12px 48px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props =>
      props.theme.addRecipePage.recipePreparation.button.hoverFill};
  }
  &:not(:hover),
  &:not(:focus) {
    transition: 0.6s;
    animation: easeIn;
  }

  @media screen and (min-width: 768px) {
    max-width: 161px;
  }
`;
