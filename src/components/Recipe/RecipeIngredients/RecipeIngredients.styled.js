import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const ContainerRecipes = styled.section`
  padding: 32px 16px 50px 16px;
  background-color: ${props => props.theme.recipePage.ingredients.background};

  @media (min-width: 768px) {
    padding: 50px 32px 0 32px;
  }
  @media (min-width: 1440px) {
    padding: 50px 100px 0 100px;
  }
`;

export const IngredientsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const Ingredient = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px 29px 14px 14px;
  border-radius: 8px;
  background-color: ${props =>
    props.theme.recipePage.ingredients.list.background};

  @media (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }
  @media (min-width: 1440px) {
    padding: 27px 70px 27px 58px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageIngredient = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;

  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const IngredientName = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  max-width: 200px;
  color: ${props => props.theme.recipePage.ingredients.list.text};

  @media (min-width: 768px) {
    max-width: 210px;
    font-size: 24px;
    line-height: 1;
  }
  @media (min-width: 768px) {
    max-width: 420px;
  }
`;

export const IngedientsMeasure = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px;
  background-color: ${props =>
    props.theme.recipePage.ingredients.list.number.background};
  color: ${props => props.theme.recipePage.ingredients.list.number.text};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 60px;
  }
  @media (min-width: 1440px) {
    margin-right: 140px;
  }
`;

export const IngedientsInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckContainer = styled.div`
  border: 1px solid
    ${props => props.theme.recipePage.ingredients.list.checkbox.outline};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: transparent;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
export const CheckIcon = styled(FaCheck)`
  width: 9px;
  height: 9px;
  @media (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;

export const IngredientLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${IngedientsInput}:checked + ${CheckContainer} {
    color: ${props => props.theme.recipePage.ingredients.list.checkbox.icon};
  }
`;
