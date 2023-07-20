import ScrollToTop from 'react-scroll-to-top';
const { styled } = require('styled-components');

export const ToTopStyled = styled(ScrollToTop)`
  background-color: ${props => props.theme.toTop.background} !important;

  svg {
    fill: ${props => props.theme.toTop.icon} !important;
  }
`;
