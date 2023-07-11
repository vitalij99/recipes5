import styled from 'styled-components';

const ContainerAddRecipe = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.addRecipePage.background};

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

export { ContainerAddRecipe };
