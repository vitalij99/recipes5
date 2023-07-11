import styled from 'styled-components';

const ContainerAddRecipe = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.addRecipePage.background};
`;

const AddRecipeTitle = styled.h2`
  color: ${props => props.theme.addRecipePage.title};
`;

export { ContainerAddRecipe, AddRecipeTitle };
