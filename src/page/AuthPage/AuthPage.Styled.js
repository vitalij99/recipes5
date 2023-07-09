import styled from 'styled-components';
import bgMobile1x from '../../images/authPage/bg_mobile@1x.jpg';
import bgMobile2x from '../../images/authPage/bg_mobile@2x.jpg';
import bgMobile3x from '../../images/authPage/bg_mobile@3x.jpg';
import bgTablet1x from '../../images/authPage/bg_mobile@1x.jpg';
import bgTablet2x from '../../images/authPage/bg_tablet@2x.jpg';
import bgTablet3x from '../../images/authPage/bg_tablet@3x.jpg';
import bgDesktop1x from '../../images/authPage/bg_desktop@1x.png';
import bgDesktop2x from '../../images/authPage/bg_desktop@2x.png';
import bgDesktop3x from '../../images/authPage/bg_desktop@3x.png';
import bgBlack from '../../images/authPage/bg_black_mobile.svg';
import bgBlackTab from '../../images/authPage/bg_black_tablet.svg';
import bgBlackDes from '../../images/authPage/bg_black_desktop.svg';

export const Section = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center 350px;
  background-size: auto auto;
  background-image: url(${bgBlack});
  height: 100%;
  padding: 87px 20px 118px;

  @media (min-width: 768px) {
    background-image: url(${bgBlackTab}),
      linear-gradient(to bottom, transparent 50%, #1e1f28 50%);
    background-position: center 410px;
    padding: 96px 20px 120px;
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
  background-image: image-set(
    url(${bgMobile1x}) 1x,
    url(${bgMobile2x}) 2x,
    url(${bgMobile3x}) 3x
  );
  background-size: contain;
  background-position: center 33px;

  @media (min-width: 768px) {
    background-image: image-set(
      url(${bgTablet1x}) 1x,
      url(${bgTablet2x}) 2x,
      url(${bgTablet3x}) 3x
    );
    height: 359px;
  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url(${bgDesktop1x}) 1x,
      url(${bgDesktop2x}) 2x,
      url(${bgDesktop3x}) 3x
    );
    width: 409px;
    height: 359px;
  }
`;
