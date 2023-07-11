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

//NOTE - Fonts use case
// const Paragraph = styled.p`
//   font-family: 'Poppins', sans-serif;
//   font-weight: 400;
//   /* Rest of your styles */
// `;

//NOTE - Breakpoints use case
// const Container = styled.div`
//   width: 100%;
//   max-width: var(--small-screen);

//   @media (min-width: 768px) {
//     max-width: var(--medium-screen);
//   }

//   @media (min-width: 1440px) {
//     max-width: var(--large-screen);
//   }
// `;

//NOTE - Animation use case
// const AnimatedButton = styled.button`
//   /* Styles for the button */

//   /* Add the animation class on hover */
//   &:hover {
//     animation: easeOut 1s ease-in-out infinite;
//   }
// `;

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

  body {
    font-family: 'Poppins', sans-serif;
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

   /* Global Breakpoints */
  :root {
    --small-screen: 375px;
    --medium-screen: 768px;
    --large-screen: 1440px;
  }

  /* Animation */
  .ease-in {
    animation-name: easeIn;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.17,.67,.83,.67)
  }

  .ease-out {
    animation-name: easeOut;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.17,.67,.83,.67)
  }

  button {
    &:hover {
      transition: 0.6s;
      animation:  easeIn;
    }
    &:not(:hover){
      transition: 0.6s;
      animation:  easeOut;
    }
  }

  a {
    &:hover {
      transition: 0.6s;
      animation:  easeIn;
    }
    &:not(:hover){
      transition: 0.6s;
      animation:  easeOut;
    }
  }
  
  div {
    &:hover {
      transition: 0.6s;
      animation:  easeIn;
    }
    &:not(:hover){
      transition: 0.6s;
      animation:  easeOut;
    }
  }

  svg {
    &:hover {
      transition: 0.6s;
      animation:  easeIn;
    }
    &:not(:hover){
      transition: 0.6s;
      animation:  easeOut;
    }
  }
`;

export default GlobalStyles;
