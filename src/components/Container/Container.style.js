const { styled } = require('styled-components');

const ContainerMedia = styled.div`
  /* outline: red 1px solid; */

  margin: 0 auto;
  max-width: var(--small-screen);

  @media (min-width: 768px) {
    max-width: var(--medium-screen);
  }

  @media (min-width: 1440px) {
    max-width: var(--large-screen);
  }
`;

export default ContainerMedia;
