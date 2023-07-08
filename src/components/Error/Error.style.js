import styled from 'styled-components';
// import { lightTheme } from 'styles/theme';

const Img = styled.img`
  max-width: 259px;
  max-height: 170px;
  margin: auto;
  margin-bottom: 14px;
`;

const TextContainer = styled.div`
  margin: auto;
  width: 268px;
`;

const BoldText = styled.p`
  font-family: 'Poppins';
  font-weight: 900;
  color: #000;
  text-align: center;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-family: 'Poppins';
  text-align: center;
  color: gray;
`;

export { Img, TextContainer, BoldText, Text };
