import styled from 'styled-components';

export const PopularContainer = styled.div`
  grid-column: 2;
  grid-row: span 2;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.24px;

  margin-bottom: 32px;
`;

export const PopularBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerRecipe = styled.div`
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  width: 343px;
  height: 98px;

  &:hover,
  &:focus {
    border-bottom: 1px solid
      ${props => props.theme.addRecipePage.popularRecipe.hoverUndertitle};
    transition: 0.6s;
    animation: easeIn;
  }
  &:not(:hover),
  &:not(:focus) {
    transition: 0.6s;
    animation: easeOut;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const ImgRecipe = styled.img`
  display: block;
  width: 104px;
  height: 85px;
  margin-right: 12px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

export const AboutBox = styled.div`
  display: block;
`;

export const TitleRecipe = styled.h4`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const TextRecipe = styled.p`
  color: ${props => props.theme.addRecipePage.recipePreparation.text2};
  opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};

  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;

  &::placeholder {
    color: ${props => props.theme.addRecipePage.recipePreparation.text2};
    opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};
  }
`;
