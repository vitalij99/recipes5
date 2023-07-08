import styled from 'styled-components';
import bgMobile from '../../images/authPage/bg_mobile.jpg';
import bgMobile2x from '../../images/authPage/bg_mobile2x.jpg';
import bgMobile3x from '../../images/authPage/bg_mobile3x.jpg';
import bgDesktop from '../../images/authPage/bg_desktop.png';
import bgBlack from '../../images/authPage/bg_black_mobile.svg';
import bgBlackTab from '../../images/authPage/bg_black_tablet.svg';
import bgBlackDes from '../../images/authPage/bg_black_desktop.svg';

export const Section = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center 280px;
  background-size: auto auto;
  background-image: url(${bgBlack});
  height: 100vh;
  overflow: hidden;
  @media (min-width: 768px) {
    background-image: url(${bgBlackTab}),
      linear-gradient(to bottom, transparent 50%, #1e1f28 50%);
    background-position: center 280px;
  }

  @media (min-width: 1440px) {
    padding: 122px;
    background-image: url(${bgBlackDes}),
      linear-gradient(to bottom, transparent 20%, #1e1f28 20%);
    background-position: center 400px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--small-screen);
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: var(--medium-screen);
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 164px;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: var(--large-screen);
  }
`;
export const ImgWrapper = styled.div`
  height: 250px;
  background-repeat: no-repeat;
  background-image: url(${bgMobile});
  background-size: contain;
  background-position: center 33px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }
  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: url(${bgMobile3x});
  }

  @media (min-width: 768px) {
    height: 359px;
  }

  @media (min-width: 1440px) {
    background-image: url(${bgDesktop});
    width: 409px;
    height: 359px;
  }
`;
