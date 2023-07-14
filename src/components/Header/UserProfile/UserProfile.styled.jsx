import styled from 'styled-components';

export const ModalOverlay = styled.div`
  font-family: 'Poppins', sans-serif;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  width: 330px;
  border-radius: 30px;
  background: ${props => props.theme.mainPage.background};
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 99;
  padding: 32px 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 50px 50px;
  }
`;

export const ModalSaveButton = styled.div`
  border-radius: 6px;
  background: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.fill};
  padding: 21px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-right: 8px;
  cursor: pointer;
  width: 100%;
  color: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.text};
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
  position: relative;
`;
export const CloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 18px;
  top: 18px;

  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;

export const AddIconContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: -8px;
  right: 108px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 10px 40px 10px 40px;
  color: #23262a;
  border: 1px solid #23262a;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  opacity: 0.4;
  margin-bottom: 24px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #23262a;
    line-height: 15px;
  }
`;
export const Label = styled.label`
  position: relative;
  z-index: 999;

  /* &::before {
    content: '';

    width: 18px;
    height: 18px;
    background-image: url('../../../images/Header/user.svg');
    position: absolute;
    left: 14px;
    top: 5px;
  } */
`;

export const UserIconContainer = styled.div`
  position: absolute;
  left: 14px;
  top: 3px;
`;
export const EditIconContainer = styled.div`
  position: absolute;
  right: 14px;
  top: 5px;
  stroke: ${props => props.theme.mainPage.header.userMenuEditProfile.text};
`;
