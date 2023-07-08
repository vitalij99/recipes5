import styled from 'styled-components';

import mob_ratio_1 from '../../../images/Recipe/BG_image/mob_ratio_1.webp';
import mob_ratio_2 from '../../../images/Recipe/BG_image/mob_ratio_2.webp';
import tab_ratio_1 from '../../../images/Recipe/BG_image/tab_ratio_1.webp';
import tab_ratio_2 from '../../../images/Recipe/BG_image/tab_ratio_2.webp';
import desc_ratio_1 from '../../../images/Recipe/BG_image/desc_ratio_1.webp';
import desc_ratio_2 from '../../../images/Recipe/BG_image/desc_ratio_2.webp';
import full_desc_ratio_1 from '../../../images/Recipe/BG_image/full_desc_ratio_1.webp';
import full_desc_ratio_2 from '../../../images/Recipe/BG_image/full_desc_ratio_2.webp';

export const RecipeHeroWrapper = styled.div`
  width: 100%;
  height: 455px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 144px;
  padding-bottom: 90px;
  text-align: center;
  background-image: url(${mob_ratio_1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mob_ratio_2});
  }

  @media (min-width: 375px) {
    background-image: url(${tab_ratio_1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tab_ratio_2});
    }
  }

  @media (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 32px;
    background-image: url(${desc_ratio_1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desc_ratio_2});
    }
  }

  @media (min-width: 1440px) {
    padding-top: 164px;
  }

  @media (min-width: 1280px) {
    background-image: url(${full_desc_ratio_1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${full_desc_ratio_2});
    }
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Poppins';
  color: #8baa36;
  font-weight: 600;
  font-size: 24px;
  max-width: 360px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 44px;
    max-width: 700px;
    margin-bottom: 24px;
  }
`;
export const HeroDescr = styled.p`
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 1.33;
  color: #22252a;

  @media (min-width: 768px) {
    max-width: 506px;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    max-width: 656px;
    margin-bottom: 30px;
  }
`;
export const HeroBtn = styled.button`
  background-color: transparent;
  color: #22252a;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  padding: 10px 18px;
  font-weight: 400;
  font-size: 10px;
  line-height: 0.6;
  margin-bottom: 42px;
  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  &:hover,
  &:focus {
    background-color: #8baa36;
    color: #fafafa;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
    margin-bottom: 60px;
    border: 2px solid #8baa36;
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const HeroTimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroTime = styled.span`
  font-size: 10px;
  line-height: 1.4;
  color: #23262a;
  @media (min-width: 768px) {
    font-size: 14px;
    margin-left: 8px;
  }
`;
