import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px 100px 16px;

  @media (min-width: 768px) {
    padding: 96px 32px 200px 32px;
    align-items: start;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 96px 100px 200px 100px;
  }
`;

export const InstructionTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 30px;
  color: ${props => props.theme.recipePage.recipePreparation.title};
`;

export const InstructionDescrContainer = styled.div`
  @media (min-width: 1440px) {
    width: 757px;
  }
`;
export const InstructionImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 343px;
  width: 100%;

  @media (min-width: 768px) {
    width: 433px;
    height: 332px;
    justify-content: start;
  }
  @media (min-width: 1440px) {
    margin-left: 50px;
  }
`;

export const InstructionImg = styled.img`
  border-radius: 8px;
  height: 343px;
  object-fit: cover;
  width: 100%;

  @media (min-width: 768px) {
    height: 332px;
  }
`;
