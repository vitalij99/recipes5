import styled from 'styled-components';

export const Title = styled.h3`
color: #3E4462;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.48px;
margin-bottom:24px

`
export const TextArea = styled.textarea`
width: 343px;
height: 154px;
resize: none;
padding: 10px 16px;
outline: none;
background-color: rgb(217, 217, 217);
border: none;
border-radius: 6px;
margin-bottom: 18px;
box-sizing: border-box;
color: rgb(0, 0, 0);
@media screen and (min-width: 768px) {
    width: 398px;
     }
     @media screen and (min-width: 1440px) {
      width: 617px;
     }
`