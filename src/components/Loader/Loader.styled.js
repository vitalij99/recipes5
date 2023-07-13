import styled, { keyframes } from 'styled-components';
import { IoRestaurantSharp } from 'react-icons/io5';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: ${props => props.theme.loader.background};
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
  80% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

const PulsatingAnimation = styled.div`
  animation: ${pulsateAnimation} 4s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(IoRestaurantSharp)`
  width: 100px;
  height: 100px;
  fill: ${props => props.theme.loader.icon};

  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 150px;
  }
`;

export { LoaderContainer, PulsatingAnimation, Icon };