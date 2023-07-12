import styled, { keyframes } from 'styled-components';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: ${props => props.theme.loaderPage.background};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const StyledLoaderIcon = styled(LocalDiningIcon)`
  color: ${props => props.theme.loaderPage.icon};

  &.css-i4bv87-MuiSvgIcon-root {
    font-size: 7rem;
  }
`;

const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
`;

const PulsatingAnimation = styled.div`
  animation: ${pulsateAnimation} 6s linear infinite;
`;

export { LoaderContainer, StyledLoaderIcon, PulsatingAnimation };
