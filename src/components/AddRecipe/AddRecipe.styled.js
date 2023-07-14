import styled from 'styled-components';

const ContainerAddRecipe = styled.div`
  padding: 0 16px;
  background-color: ${props => props.theme.addRecipePage.background};

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;

const Form = styled.form`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: content;
    grid-gap: 10px;
  }
`;

export { ContainerAddRecipe, Form };
