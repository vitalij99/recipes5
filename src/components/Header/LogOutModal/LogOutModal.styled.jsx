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
  height: 179px;
  border-radius: 30px;
  background: ${props => props.theme.mainPage.background};
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 99;
  padding: 44px 24px;
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

export const ModalLogOutText = styled.div`
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  color: ${props => props.theme.mainPage.header.userMenuEditProfile.text};
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;

export const ModalLogOutButton = styled.div`
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
  width: 48%;
  color: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.text};
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const ModalCancelButton = styled.div`
  border-radius: 6px;
  background: #d9d9d9;
  padding: 21px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  width: 48%;
  margin-right: 8px;
  cursor: pointer;
  color: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.hoverFill};
`;
export const ModaButtonContainer = styled.div`
  display: flex;
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
