import styled from 'styled-components';
import bgMobile1 from 'images/welcomePage/bg_mobile@1x.jpg';
import bgMobile2 from 'images/welcomePage/bg_mobile@2x.jpg';
import bgTablet1 from 'images/welcomePage/bg_tablet@1x.jpg';
import bgTablet2 from 'images/welcomePage/bg_tablet@2x.jpg';
import bgDesktop1 from 'images/welcomePage/bg_desktop@1x.jpg';
import bgDesktop2 from 'images/welcomePage/bg_desktop@2x.jpg';

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
    image-set(url(${bgMobile1}) 1x, url(${bgMobile2}) 2x);

  @media (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      image-set(url(${bgTablet1}) 1x, url(${bgTablet2}) 2x);
  }
  @media (min-width: 1024px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      image-set(url(${bgDesktop1}) 1x, url(${bgDesktop2}) 2x);
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
export const ImgStyled = styled.svg`
  width: 54px;
  height: 54px;
  padding: 10px;
  border-radius: 12px;
  background: #8baa36;
  margin-bottom: 28px;
  stroke: #fafafa;
  @media (min-width: 768px) {
    margin-bottom: 44px;
    width: 68px;
    height: 68px;
  }
`;
