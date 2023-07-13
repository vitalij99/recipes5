import styled from 'styled-components';

const ContainerAddRecipe = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.addRecipePage.background};
`;

const Form = styled.form`
  /* display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-gap: 10px; */
`;

export { ContainerAddRecipe, Form };
