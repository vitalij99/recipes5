import styled from 'styled-components';
import { ReactComponent as Trash } from "images/Favorite/trashBlack.svg"
// import errorPhoto from '../../images/error-404.svg';


export const PageTitle = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 1;
padding: 114px 16px 60px 16px;
color: ${props => props.theme.favoritePage.title};

@media screen and (min-width: 768px) {
   font-size: 32px;
   padding: 136px 32px 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding: 164px 100px 110px 100px;
  }

`;
export const CardList = styled.ul`
  display: flex;
  flex-direction:column;
  gap: 18px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    gap:40px;
  }
  @media (min-width: 1440px) {
    gap: 50px;
  }
`;


export const Card = styled.li`
  height: 152px;
  display: flex;
  background-color: ${props => props.theme.favoritePage.list.background};
  border-radius: 8px;
  padding: 14px;

  @media (min-width: 768px) {
    height: 284px;
    padding: 28px 24px;
  }
  @media (min-width: 1440px) {
    height: 404px;
    padding: 40px;
  }
`;

export const CardImg = styled.img`
    margin-right: 14px;
    border-radius: 8px;
    width: 124px;
    height: 124px;

  @media (min-width: 768px) {
    margin-right: 24px;
    width: 228px;
    height: 232px;
  }
  @media (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const CardTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;

margin-bottom: 14px;
color: ${props => props.theme.favoritePage.list.title};

  @media (min-width: 768px) {
    font-size: 24px;
    width: 350px;
  }
  @media (min-width: 1440px) {
    width: 680px;
  }
`;
export const CardTextWrap = styled.div`
  position: relative;
  width: 100%;
`;
export const CardDesc = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;

  color: ${props => props.theme.favoritePage.list.text};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
    margin-right: 51px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    margin-right: 123px;
  }
`;

export const CardTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  bottom: 0;
`;
export const Time = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;

  color: ${props => props.theme.favoritePage.list.title};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }

`;

export const TrashSvg = styled(Trash)`
  stroke:${props => props.theme.myRecipesPage.icon.color};;
  
  @media (max-width: 767px) {
    width: 10px;
    height: 11px;
  }
  @media (min-width: 1440px) {
    width: 18px;
    height: 20px;
  }
`;


export const DeleteBtn = styled.button`
  position: absolute;
  type:button;
  cursor: pointer;
  border:none;
  outline:none;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.myRecipesPage.icon.background};
  border-radius: 4px;
  transition: 125ms 125ms linear;
  display:flex;
  align-items: center;
  justify-content:center;
  line-height: 24px;
  right: 0;
  top:0;
  &:hover ${TrashSvg} {
    stroke:white;
  }
  &:hover{
    background:#8BAA36;
  }
  @media (min-width: 768px) {
    width: 38px;
    height: 38px;
    background: ${props => props.theme.myRecipesPage.icon.background};;
    border-radius: 4px;
    line-height: 38px;
  }
  @media (min-width: 1440px) {
    width: 44px;
    height: 44px;
    background: ${props => props.theme.myRecipesPage.icon.background};;
    border-radius: 4px;
    line-height: 44px;
  }
`;


export const SeeRecipeBtn = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;

    cursor: pointer;
    color: #ffffff;
    background-color:${props => props.theme.favoritePage.button.hoverFill};
    border: none;
    font-family: 'Poppins';
    border-radius: 24px 44px;

    position: absolute;
    right: 0;
    bottom: 0;

    height: 27px;
    width: 87px;
    transition: 125ms 125ms linear;
    &:hover {
        background-color: ${props => props.theme.favoritePage.button.fill};
        color: ${props => props.theme.favoritePage.button.text};
      }
  @media (min-width: 768px) {
        font-size: 14px;
        height:45px;
        width:138px;
      }
  @media (min-width: 1440px) {
    font-size: 14px;
    height:54px;
    width: 160px;

    background-color:${props => props.theme.favoritePage.button.fill};
    color: ${props => props.theme.favoritePage.button.text};

    &:hover {
      color: #ffffff;
      background-color: ${props => props.theme.favoritePage.button.hoverFill};
    }
  }
`;

// export const ErrorWrap = styled.div`
// text-align: center;
// margin-top:100px;
// `
// export const ErrorPhoto = styled.div`
//   background-size: cover;
//   background-content: no-repeat;
//   display: inline-block;
//   height: 170px;
//   width: 259px;
//   background-repeat: no-repeat;
//   background-image: url(${errorPhoto});
// `;
