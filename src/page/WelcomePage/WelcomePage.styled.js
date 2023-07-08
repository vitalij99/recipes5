import styled from 'styled-components';
import MBG1 from '../../images/welcomePage/bg.jpg';

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 0 35px;
  color: #fafafa;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    image-set(url(${MBG1}) 1x);

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

export const PStyled = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  margin-bottom: 44px;
  margin-top: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    max-width: 505px;
  }
  @media (min-width: 1024px) {
    max-width: 540px;
  }
`;
