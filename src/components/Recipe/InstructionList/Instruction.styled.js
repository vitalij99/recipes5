import styled from 'styled-components';

export const InstructionContainer = styled.ul`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }

  & span {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    padding: 2px 7px;

    border-radius: 50%;
    width: 22px;
    height: 22px;
    color: ${props => props.theme.recipePage.recipePreparation.list.number};
    background-color: ${props =>
      props.theme.recipePage.recipePreparation.list.circle};

    @media (min-width: 768px) {
      font-size: 14px;
      padding: 2px 7px;
    }
  }

  & li {
    width: 100%;
    display: flex;
  }

  & p {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.16;
    margin-left: 14px;
    color: ${props => props.theme.recipePage.recipePreparation.list.text};

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 1.28;
    }
  }
`;
