import styled from 'styled-components';
import bgMobile1x from 'images/authPage/bg_mobile@1x.jpg';
import bgMobile2x from 'images/authPage/bg_mobile@2x.jpg';
import bgMobile3x from 'images/authPage/bg_mobile@3x.jpg';
import bgTablet1x from 'images/authPage/bg_tablet@1x.jpg';
import bgTablet2x from 'images/authPage/bg_tablet@2x.jpg';
import bgTablet3x from 'images/authPage/bg_tablet@3x.jpg';
import bgDesktop1x from 'images/authPage/bg_desktop@1x.png';
import bgDesktop2x from 'images/authPage/bg_desktop@2x.png';
import bgDesktop3x from 'images/authPage/bg_desktop@3x.png';
import bgBlack from 'images/authPage/bg_black_mobile.svg';
import bgBlackTab from 'images/authPage/bg_black_tablet.svg';
import bgBlackDes from 'images/authPage/bg_black_desktop.svg';

export const Section = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center 350px;
  background-size: auto auto;
  background-image: url(${bgBlack});
  flex: 1;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url(${bgBlackTab}),
      linear-gradient(to bottom, transparent 50%, #1e1f28 50%);
    background-position: center 410px;
  }

  @media (min-width: 1440px) {
    background-image: url(${bgBlackDes}),
      linear-gradient(to bottom, transparent 20%, #1e1f28 20%);
    background-position: center 400px;
  }
`;

export const Container = styled.div`
  padding-top: 87px;
  padding-bottom: 50px;
  max-width: var(--small-screen);
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 96px;
    max-width: var(--medium-screen);
  }

  @media (min-width: 1440px) {
    display: flex;
    padding-top: 130px;
    gap: 164px;
    justify-content: center;

    align-items: flex-start;
    max-width: var(--large-screen);
  }
`;
export const ImgWrapper = styled.div`
  height: 250px;
  background-repeat: no-repeat;
  background-image: image-set(
    url(${bgMobile1x}) 1x,
    url(${bgMobile2x}) 2x,
    url(${bgMobile3x}) 3x
  );
  background-size: contain;
  background-position: center 9px;

  @media (min-width: 768px) {
    background-image: image-set(
      url(${bgTablet1x}) 1x,
      url(${bgTablet2x}) 2x,
      url(${bgTablet3x}) 3x
    );
    height: 359px;
    background-position: center 12px;
  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url(${bgDesktop1x}) 1x,
      url(${bgDesktop2x}) 2x,
      url(${bgDesktop3x}) 3x
    );
    width: 532px;
    height: 468px;
  }
`;
