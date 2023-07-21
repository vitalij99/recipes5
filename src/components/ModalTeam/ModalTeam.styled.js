import { BsFillXCircleFill } from 'react-icons/bs';
import { VscGithubInverted } from 'react-icons/vsc';
import styled from 'styled-components';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 800;
  overflow-y: auto;
  opacity: 1;
`;
export const WrapperModal = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: ${props => props.theme.mainPage.background};
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 618px;
  }

  @media (min-width: 1440px) {
    width: 900px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const BtnModal = styled.button`
  margin-top: 10px;
  width: 25px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  border: 1px solid #8baa36;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnIcon = styled(BsFillXCircleFill)`
  width: 25px;
  height: 25px;
  fill: #8baa36;
`;

export const TeamCards = styled.div``;

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 5px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #fafafa;
  background-color: #8baa36;
`;

export const TeamCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TeamCard = styled.li`
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 15px;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 30px);
    margin-left: 30px;
    margin-top: 30px;
  }
  @media (min-width: 1440px) {
    flex-basis: calc(33.33% - 10px);
  }

  &:hover {
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.03);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const FotoDeveloper = styled.img`
  display: block;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #fafafa;
`;
export const CardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5cqb;
  margin-left: 10px;
`;
export const NameInfo = styled.span`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.33;
  color: #2a2a2a;
`;

export const IconGit = styled(VscGithubInverted)`
  width: 24px;
  height: 24px;
  color: #2a2a2a;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
`;

export const LinkGit = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 70px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #2a2a2a;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    border: 1px solid #8baa36;
    ${IconGit} {
      color: #8baa36;
      transform: scale(1.1);
    }
  }
`;
