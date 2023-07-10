import styled from 'styled-components';

export const Title = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 1;
padding: 50px 206px 50px 16px;
color: ${props => props.theme.favoritePage.title};

@media screen and (min-width: 768px) {
   font-size: 32px;
   padding: 72x 562px 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding: 102px 1101px 110px 100px;
  }

`;
export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 100px;
  gap: 28px;
  width: 100%;


  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 200px;
    gap: 32px;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;    
    gap: 14px;
    row-gap: 100px;
    padding-left: 99px;
    padding-right: 99px;
  }
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

export const ProductName= styled.p`

color: ${props => props.theme.favoritePage.list.title};

  @media (min-width: 768px) {

  }
  @media (min-width: 1440px) {

  }
`;
