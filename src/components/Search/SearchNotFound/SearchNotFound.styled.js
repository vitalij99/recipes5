import basketM from '../../../images/Search/mobile/basket.png';
import basketMx2 from '../../../images/Search/mobile/basket@2x.png';

import basketT from '../../../images/Search/tablet/basket.png';
import basketTx2 from '../../../images/Search/tablet/basket@2x.png';

const { styled } = require('styled-components');

export const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    /* padding-bottom: 200px; */
  }
`;

export const Img = styled.div`
  max-width: 208px;
  height: 133px;
  margin: 0 auto;

  background-repeat: no-repeat;
  background-size: contain;

  background-image: url(${basketM});
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${basketMx2});
  }

  @media screen and (min-width: 768px) {
    max-width: 350px;
    height: 225px;
    background-image: url(${basketT});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${basketTx2});
    }
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.searchPage.text.color};
  opacity: 0.5;

  margin-top: 24px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    line-height: 24px;
    letter-spacing: -0.48px;
    font-size: 24px;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    line-height: 24px;
    letter-spacing: -0.48px;
    font-size: 24px;
    margin-top: 32px;
  }
`;
