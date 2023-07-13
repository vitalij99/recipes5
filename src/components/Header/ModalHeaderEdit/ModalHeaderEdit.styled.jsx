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
  z-index: 900;
  position: absolute;
  right: 60px;
  top: 72px;
  width: 161px;
  height: 130px;
  font-family: 'Poppins', sans-serif;
  border-radius: 8px;
  border: 1px solid
    ${props => props.theme.mainPage.header.userMenuEditProfile.outline};
  background: ${props => props.theme.mainPage.background};
  display: flex;
  flex-direction: column;
  padding: 18px;
  @media screen and (min-width: 768px) {
    width: 177px;
    height: 134px;
    right: 128px;
    top: 78px;
    border: none;
  }
  @media screen and (min-width: 1440px) {
    right: 211px;
  }
`;

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 28px;
  &:hover {
    color: ${props => props.theme.mainPage.header.userMenuEditProfile.hover};
  }
`;

export const EditProfileText = styled.span`
  color: ${props => props.theme.mainPage.header.userMenuEditProfile.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  &:hover {
    color: ${props => props.theme.mainPage.header.userMenuEditProfile.hover};
  }
`;

export const EditProfileIcon = styled.div`
  width: 14px;
  height: 14px;
`;

export const EditProfileButton = styled.button`
  border-radius: 24px 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 12px 24px 12px 27px;
  background-color: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.fill};
  color: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.text};
  white-space: nowrap;
  &:hover {
    background-color: ${props =>
      props.theme.mainPage.header.userMenuEditProfile.button.hoverFill};
  }
  border: none;
  cursor: pointer;
`;

export const EditProfileButtonText = styled.div`
  color: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.text};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  margin-right: 4px;
`;
