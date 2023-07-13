import styled from 'styled-components';
import { BsFillXCircleFill } from 'react-icons/bs';

import mobFirstShoping_1x from '../../../images/Recipe/PresentImg/mob_firstShop_1x.png';
import mobFirstShoping_2x from '../../../images/Recipe/PresentImg/mob_firstShop_2x.png';
import tabl_firstshopping_1x from '../../../images/Recipe/PresentImg/tablet/tabl_firstshopping_1x.png';
import tabl_firstshopping_2x from '../../../images/Recipe/PresentImg/tablet/tabl_firstshopping_2x.png';
import desc_firstShop_1x from '../../../images/Recipe/PresentImg/desctop/desc_firstShop_1x.png';
import desc_firstShop_2x from '../../../images/Recipe/PresentImg/desctop/desc_firstShop_2x.png';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const WrapperModal = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${mobFirstShoping_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobFirstShoping_2x});
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    background-image: url(${tabl_firstshopping_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabl_firstshopping_2x});
    }
  }

  @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
    background-image: url(${desc_firstShop_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desc_firstShop_2x});
    }
  }
`;
export const TitleModal = styled.h2`
  font-size: 23px;
`;
export const BtnModal = styled.button`
  width: 40px;
  height: 40px;
  top: 75%;
  left: 43%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  border: 1px solid #8baa36;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    top: 75%;
    left: 44%;
  }

  @media (min-width: 1440px) {
    top: 77%;
    left: 45%;
  }
`;

export const BtnIcon = styled(BsFillXCircleFill)`
  width: 40px;
  height: 40px;
  fill: #8baa36;
`;
export const ImgModal = styled.img`
  display: block;
`;
