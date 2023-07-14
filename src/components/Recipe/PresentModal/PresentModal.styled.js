import styled from 'styled-components';
import { BsFillXCircleFill } from 'react-icons/bs';
import { imgModal } from './ImageDateModal';

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

export const BtnModal = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  border: 1px solid #8baa36;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
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

export const ContainerTitle = styled.div`
  width: 100%;
  padding: 102px 62px 18px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: transparent;

  @media (min-width: 768px) {
    font-size: 28px;
    padding: 134px 90px 24px 90px;
  }

  @media (min-width: 1440px) {
    padding: 218px 140px 40px 140px;
  }
`;
export const ModalTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  margin-top: 27px;
  margin-bottom: 28px;
  font-size: 20px;
  font-weight: 500;

  color: #fff;

  @media (min-width: 768px) {
    margin-top: 32px;
    font-size: 28px;
    line-height: 1.1;
  }

  @media (min-width: 1440px) {
  }
`;
export const AkcentTitle = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #8baa36;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1440px) {
  }
`;
export const WrapperModal = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: ${props => {
    switch (props.type) {
      case 'firstShopping':
        return `
      url(${imgModal.firstShopping.mob_1x});
      
      @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${imgModal.firstShopping.mob_2x});
      }
      @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    background-image: url(${imgModal.firstShopping.tab_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.firstShopping.tab_2x});
    }
  }
   @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
    background-image: url(${imgModal.firstShopping.des_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.firstShopping.des_2x});
    }
  }
      `;
      case 'tenRecipesOnFavorite':
        return `
      url(${imgModal.tenRecipes.mob_1x});
      
      @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${imgModal.tenRecipes.mob_2x});
      }
      @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    background-image: url(${imgModal.tenRecipes.tab_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.tenRecipes.tab_2x});
    }
  }
   @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
    background-image: url(${imgModal.tenRecipes.des_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.tenRecipes.des_2x});
    }
  }
      `;
      case 'firstRecipeOnFavorite':
        return `
      url(${imgModal.firstRecipes.mob_1x});
      
      @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${imgModal.firstRecipes.mob_2x});
      }
      @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    background-image: url(${imgModal.firstRecipes.tab_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.firstRecipes.tab_2x});
    }
  }
   @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
    background-image: url(${imgModal.firstRecipes.des_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.firstRecipes.des_2x});
    }
  }
      `;
      case 'oneHundredDay':
        return `
      url(${imgModal.oneHundredDay.mob_1x});
      
      @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${imgModal.oneHundredDay.mob_2x});
      }
      @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    background-image: url(${imgModal.oneHundredDay.tab_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.oneHundredDay.tab_2x});
    }
  }
   @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
    background-image: url(${imgModal.oneHundredDay.des_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgModal.oneHundredDay.des_2x});
    }
  }
      `;
      default:
        return null;
    }
  }};
`;
