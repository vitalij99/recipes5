import styled from 'styled-components';
import Select from 'react-select';

export const DescriptionBox = styled.div`
  display: block;
  grid-column: 1;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    margin-right: 121px;
  }
`;

export const AddPhotoContainer = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  background: ${props => props.theme.addRecipePage.listOfItems.icon};
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
    margin-right: 50px;
  }
`;

export const InputPhoto = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const BoxIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  top: 0px;
  left: 0px;
  cursor: pointer;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 343px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 394px;
    gap: 32px;
  }
`;

export const LabelForm = styled.label`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.addRecipePage.listOfItems.underline};
  height: 40px;

  &:hover {
    border-bottom: 1px solid
      ${props => props.theme.addRecipePage.listOfIngredients.hoverIcon1};
  }
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 0;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.addRecipePage.listOfItems.text2};
  opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};

  &::placeholder {
    color: ${props => props.theme.addRecipePage.listOfItems.text2};
    opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};
  }
`;

export const LabelSelect = styled.label`
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 40px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  border-bottom: 1px solid
    ${props => props.theme.addRecipePage.listOfItems.underline};
  color: rgba(0, 0, 0, 0.2);

  &:hover {
    border-bottom: 1px solid
      ${props => props.theme.addRecipePage.listOfIngredients.hoverIcon1};
  }
`;

export const StyledSelect = styled(Select)`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  background-color: transparent;

  & .css-t3ipsp-control {
    box-shadow: none;
    border: none;
    &:hover {
      border-color: ${props =>
        props.theme.addRecipePage.listOfIngredients.dropDownMenu.text2};
      outline: none;
    }
  }

  & .css-13cymwt-control {
    border: none;
    background-color: transparent;
    box-shadow: none;

    & .css-1dimb5e-singleValue {
      color: ${props => props.theme.addRecipePage.listOfItems.text2};
    }
  }

  & .css-1xc3v61-indicatorContainer {
    color: ${props => props.theme.addRecipePage.listOfItems.icon};
  }

  & .css-1nmdiq5-menu {
    background-color: #fff;
    padding: 1px;
    color: ${props =>
      props.theme.addRecipePage.listOfIngredients.dropDownMenu.text2};
    &:hover {
    }
  }
`;
