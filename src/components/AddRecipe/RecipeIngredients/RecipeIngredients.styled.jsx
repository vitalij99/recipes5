import styled from 'styled-components';
import Select from 'react-select';

export const IngredietsContainer = styled.div`
 
  width: 100%;
  border: none;
  margin-top:44px;
  margin-bottom:44px;
  
`;
export const IngredietsBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  justify-content:space-between;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
   width: 704px;
    }
    @media screen and (min-width: 1440px) {
      width: 617px;
    }
`;
export const Title = styled.h3`
color: #3E4462;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.48px;
`;

export const BtnBox = styled.div`
  display: flex;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  width: 92px;
  height: 28px;
  flex-shrink: 0;
`;
export const BtnCountMinus = styled.button`
  border: none;
  background-color: transparent;
  margin: auto;
`;
export const BtnCountPlus = styled.button`
  border: none;
  background-color: transparent;
  margin: auto;
  color: #8baa36;
`;
export const Count = styled.span`
  color: #333;
  align-items: center;
  display: flex;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const ItemIngredient = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 704px;
     }
     @media screen and (min-width: 1440px) {
      width: 617px;
     }
`;
export const ListIngredients = styled.li`
  position: relative;
  margin-bottom:18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
 
`;
export const SelectStyled = styled(Select)`
  & .css-13cymwt-control {
    border: none;
    background-color: #d9d9d9;
  }
  @media screen and (min-width: 768px) {
    width: 398px;
     }
     @media screen and (min-width: 1440px) {
      width: 617px;
     }
  & .css-1xc3v61-indicatorContainer {
    color: #8baa36;
  }
`;
export const InputAmount = styled.input`
  display: flex;
  width: 40px;
  height: 38px;
  border: none;
  background-color: #d9d9d9;
  
`;

export const InputBox = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;

  border-radius: 4px;
`;
export const SelectAdd = styled.select`
  border: none;
  background-color: #d9d9d9;
  color:#8BAA36;
`;
