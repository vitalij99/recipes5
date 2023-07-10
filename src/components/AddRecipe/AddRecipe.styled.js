import styled from 'styled-components';

const ContainerAddRecipe = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.addRecipePage.background};
`;

const AddRecipeTitle = styled.h2`
  color: ${props => props.theme.addRecipePage.title};
`;

const Button = styled.button`
  background-color: ${props => props.theme.mainPage.menuMobileModal.text};
  color: ${props => props.theme.addRecipePage.recipePreparation.button.text};
  border-radius: 24px 44px;
  border: none;
  padding: 12px 48px;
`;

export { ContainerAddRecipe, AddRecipeTitle, Button };
