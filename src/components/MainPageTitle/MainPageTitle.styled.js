import { styled } from 'styled-components';

export const Background = styled.div`
  background-color: ${props => props.theme.mainPageTitle.background};
`;

export const Title = styled.h1`
  color: ${props => props.theme.shoppingListPage.title};
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 16px;
  font-family: 'Poppins';
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.56px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 72px;
    margin-left: 32px;
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.64px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 72px;
    padding-bottom: 72px;
    margin-left: 100px;
    font-size: 44px;
    letter-spacing: -0.88px;
    line-height: 44px;
  }
`;

export const ParticlesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  height: 128px;
  @media screen and (min-width: 768px) {
    height: 176px;
  }
  @media screen and (min-width: 1440px) {
    height: 216px;
  }
`;

export const ParticleMobile1 = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  top: 56%;
  left: 68%;
  width: 100%;
  height: 100%;

  svg {
    fill: ${props => props.theme.mainPageTitle.particle};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ParticleMobile2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 90%;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ParticleMobile3 = styled.div`
  position: absolute;
  z-index: 1;
  top: 6%;
  left: 33%;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ParticleTablet1 = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  top: 57%;
  left: 57%;
  width: 100%;
  height: 100%;

  svg {
    fill: ${props => props.theme.mainPageTitle.particle};
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const ParticleTablet2 = styled.div`
  position: absolute;
  display: none;
  z-index: 1;
  top: 23%;
  left: 95%;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    display: block;
    left: 87%;
  }
`;

export const ParticleTablet3 = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  top: 11%;
  left: 29%;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    left: 23%;
  }
`;
