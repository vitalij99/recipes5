import styled from 'styled-components';

export const ThemeToggleStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: 90px;
  display: flex;
  justify-content: start;

  @media screen and (min-width: 768px) {
    left: 32px;
    bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    left: 1340px;
    top: 24px;
  }
`;
export const SwitchStyled = styled.div`
  margin-top: -3px;
  padding: 0;

  cursor: pointer;
  position: absolute;
`;
