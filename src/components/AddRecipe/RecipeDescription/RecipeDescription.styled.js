import styled from 'styled-components';
import Select from 'react-select';

export const DescriptionBox = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AddPhotoContainer = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  background: ${props => props.theme.addRecipePage.listOfItems.icon};
  margin: 62px auto 32px 0;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const InputPhoto = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
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
`;

export const LabelForm = styled.label`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.addRecipePage.listOfItems.underline};
  height: 40px;
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
  position: relative;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  border-bottom: 1px solid
    ${props => props.theme.addRecipePage.listOfItems.underline};
  color: ${props => props.theme.addRecipePage.listOfItems.text2};
  opacity: ${props => props.theme.addRecipePage.listOfItems.opacity};
`;

export const StyledSelect = styled(Select)`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  background-color: transparent;

  & .css-13cymwt-control {
    border: none;
    background-color: transparent;
  }

  & .css-1xc3v61-indicatorContainer {
    color: ${props => props.theme.addRecipePage.listOfItems.icon};
  }
`;
