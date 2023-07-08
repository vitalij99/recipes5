import styled from 'styled-components';
import { lightTheme } from 'styles/theme';

const Img = styled.img`
  width: 259px;
  height: 170px;
  margin: 0 auto;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 933px;
    height: 612px;
    margin-bottom: 32px;
  }
`;

const TextContainer = styled.div`
  margin: auto;
  width: 225px;

  @media screen and (min-width: 768px) {
    width: 429px;
  }
`;

const BoldText = styled.p`
  font-family: 'Poppins';
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.111;
  letter-spacing: -0.0225em;
  color: ${lightTheme.mobile.addRecipePage.listOfItems.text2};
  text-align: center;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: -0.03em;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;

const Text = styled.p`
  font-family: 'Poppins';
  text-align: center;
  color: ${lightTheme.mobile.addRecipePage.listOfItems.text2};
  opacity: 0.5;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2857;
  letter-spacing: -0.0175em;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.3333;
    letter-spacing: -0.0225em;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.125rem;
    line-height: 1.333;
    letter-spacing: -0.0225rem;
  }
`;

export { Img, TextContainer, BoldText, Text };
