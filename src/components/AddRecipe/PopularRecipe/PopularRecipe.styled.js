import styled from 'styled-components';

export const PopularContainer = styled.div`
  margin-top: 72px;
  /* grid-column: 2;
  grid-row: 2; */
`;

export const Title = styled.h3`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
  margin-bottom: 32px;
`;
export const PopularBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px; */
  }
`;
export const ContainerRecipe = styled.div`
  display: flex;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  max-width: 320px;
`;

export const ImgRecipe = styled.img`
  display: block;
  width: 97px;
  height: 85px;
  margin-right: 12px;
  border-radius: 5px;
`;

export const AboutBox = styled.div`
  display: block;
`;

export const TitleRecipe = styled.h4`
  color: ${props => props.theme.addRecipePage.popularRecipe.title};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const TextRecipe = styled.p`
  color: ${props => props.theme.addRecipePage.recipePreparation.text2};
  opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};

  &::placeholder {
    color: ${props => props.theme.addRecipePage.recipePreparation.text2};
    opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};
  }
`;
