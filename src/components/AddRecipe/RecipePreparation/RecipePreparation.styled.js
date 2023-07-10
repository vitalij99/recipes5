import styled from 'styled-components';

export const Title = styled.h3`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-bottom: 24px;
`;

export const TextArea = styled.textarea`
  width: 343px;
  height: 154px;
  resize: none;
  padding: 10px 16px;
  outline: none;
  background-color: ${props =>
    props.theme.addRecipePage.recipePreparation.background};
  border: none;
  border-radius: 6px;
  margin-bottom: 18px;
  box-sizing: border-box;
  color: ${props => props.theme.addRecipePage.recipePreparation.text2};
  opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};

  &::placeholder {
    color: ${props => props.theme.addRecipePage.recipePreparation.text2};
    opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};
  }

  @media screen and (min-width: 768px) {
    width: 398px;
  }

  @media screen and (min-width: 1440px) {
    width: 617px;
  }
`;
