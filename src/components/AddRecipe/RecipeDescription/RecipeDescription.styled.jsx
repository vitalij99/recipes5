import styled from 'styled-components';
import Select from 'react-select';

export const AddFotoContainer = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #8baa36;
  margin-bottom: 32px;
  margin-top: 62px;
 margin-left:auto;
 margin-right:auto;
`;
export const InputFoto = styled.input`
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
  border-bottom: 1px solid rgb(224, 224, 224);
  height: 40px;
`;
export const InputForm = styled.input`
  width: 100%;
  padding: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  background-color: transparent;
  color: #000;
  opacity: 0.5;
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
  border-bottom: 1px solid rgb(224, 224, 224);
  color: #000;
  opacity: 0.5;
`;
export const StyledSelect = styled(Select)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  background-color: transparent;

  & .css-13cymwt-control {
    border: none;
  }
  & .css-1xc3v61-indicatorContainer {
    color: #8baa36;
  }
`;
