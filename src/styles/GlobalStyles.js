import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

import PoppinsBlack from './fonts/Poppins-Black.ttf';
import PoppinsBold from './fonts/Poppins-Bold.ttf';
import PoppinsExtraBold from './fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraLight from './fonts/Poppins-ExtraLight.ttf';
import PoppinsLight from './fonts/Poppins-Light.ttf';
import PoppinsMedium from './fonts/Poppins-Medium.ttf';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';
import PoppinsThin from './fonts/Poppins-Thin.ttf';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  /* Font Face */
  @font-face {
    font-family: 'Poppins';
    font-weight: 900;
    font-style: normal;
    src: url(${PoppinsBlack}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    font-style: normal;
    src: url(${PoppinsBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 800;
    font-style: normal;
    src: url(${PoppinsExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 200;
    font-style: normal;
    src: url(${PoppinsExtraLight}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 300;
    font-style: normal;
    src: url(${PoppinsLight}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    font-style: normal;
    src: url(${PoppinsMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    font-style: normal;
    src: url(${PoppinsSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 100;
    font-style: normal;
    src: url(${PoppinsThin}) format('truetype');
  }

  
  /* Reset CSS */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }
  

  a {
    text-decoration: none;
  }
  

  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyles;

//NOTE - how to use fonts
// const Paragraph = styled.p`
//   font-family: 'Poppins', sans-serif;
//   font-weight: 400;
//   /* Rest of your styles */
// `;
