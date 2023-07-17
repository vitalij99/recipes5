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
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 50px 50px;
  }
`;

export const ModalSaveButton = styled.button`
  border-radius: 6px;
  border: none;
  background: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.fill};
  padding: 21px 18px;
  display: flex;
  justify-content: center;
  font-size: 14px;
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
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
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

export const AddIconContainer = styled.label`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: -8px;
  left: 42px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 10px 40px 10px 40px;
  color: #23262a;
  border: 1px solid #23262a;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  opacity: 0.4;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding: 14px 40px 14px 40px;
    font-size: 18px;
  }
`;
export const Label = styled.label`
  position: relative;
  z-index: 999;
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
export const InputPhoto = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
