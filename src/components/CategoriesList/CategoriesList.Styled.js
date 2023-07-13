import styled from 'styled-components';

export const CategoriesSection = styled.div`
   background-color: ${props => props.theme.categoriesPage.background};
  }
`;

export const CategoriesNavListStyled = styled.div`
  display:flex;
      // border-bottom: 1px solid ${props =>
        props.theme.addRecipePage.listOfItems.underline};
  }
  
`;

export const CategoriesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
    gap: 14px;
    row-gap: 100px;
  }
`;

export const CategoriesImgWrap = styled.div`
  position: relative;
`;

export const CategoriesImg = styled.img`
  display: inline-block;
  border-radius: 8px;
  max-width: 343px;

  @media (min-width: 768px) {
    max-width: 336px;
  }
  @media (min-width: 1440px) {
    max-width: 300px;
  }
`;

export const ProductNameWrap = styled.div`
  position: absolute;
  width: 307px;
  height: 52px;
  bottom: 24px;
  left: 18px;
  border-radius: 8px;
  background: ${props =>
    props.theme.categoriesPage.list.recipePlate.background};

  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 268px;
  }
`;

export const ProductName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.categoriesPage.list.recipePlate.text};

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
