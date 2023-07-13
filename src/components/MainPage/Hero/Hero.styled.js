import { styled } from 'styled-components';

import banner from 'images/mainPage/bm.png';
import banner2 from 'images/mainPage/bg1.png';
import banner3 from 'images/mainPage/img-1.png';
import banner4 from 'images/mainPage/bg-2.png';

import bannerT from 'images/mainPage/bmt.png';
import banner2T from 'images/mainPage/bg1.svg';
import banner3T from 'images/mainPage/img-2.png';
import banner4T from 'images/mainPage/bg-2t.png';

import bannerD from 'images/mainPage/bmd.png';
import banner2D from 'images/mainPage/bg2.svg';
import banner3D from 'images/mainPage/img-3.png';
import banner4D from 'images/mainPage/bg-2d.png';

export const WrapperStyled = styled.div`
  padding-top: 68px;
  padding-bottom: 147px;
  height: 777px;

  background-image: url(${banner}), url(${banner3}), url(${banner4}),
    url(${banner2});
  background-repeat: no-repeat;
  background-position: top left, 55% 55%, center right, top right;
  background-size: auto, auto;

  @media screen and (min-width: 768px) {
    height: 640px;
    padding-left: 38px;
    background-image: url(${bannerT}), url(${banner3T}), url(${banner4T}),
      url(${banner2T});
    background-position: top left, 80% 30%, center right, top right;
  }
  @media screen and (min-width: 1440px) {
    height: 800px;
    background-image: url(${bannerD}), url(${banner3D}), url(${banner4D}),
      url(${banner2D});
    background-position: top left, center, center, center 100px top;
  }
`;
export const BoxStyled = styled.div``;
export const TitleStyled = styled.h1`
  font-size: 60px;
  font-weight: 700;
  text-align: center;

  color: ${({ theme }) => theme.mainPageTitle.particle};
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;
    width: min-content;
  }
  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;
export const SpanTitle = styled.span`
  color: #8baa36;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    text-shadow: none;
  }
`;
export const ParagrafStyled = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  letter-spacing: -2%;
  margin-top: -15px;
  padding-left: 64px;
  padding-right: 64px;
  color: ${({ theme }) => theme.mainPage.menuMobileModal.text};
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 362px;
    padding-left: 0;
    padding-right: 0;
    text-align: left;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    width: 465px;
  }
`;
export const InformFieldStyled = styled.div`
  width: 100%;
  top: -1297px;
  left: -20px;
  z-index: 3;
`;
export const WraooerSearchStyled = styled.div`
  position: absolute;
  width: 295px;
  top: 643px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 767px) {
    left: 0;
    transform: translateX(0);
  }
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    width: 362px;
  }
  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;
