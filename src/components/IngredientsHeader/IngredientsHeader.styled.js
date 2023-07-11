import styled from 'styled-components';

export const IngredientsTitle = styled.div`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8baa36;

  @media (min-width: 768px) {
    padding: 21px 32px;
  }
  @media (min-width: 1440px) {
    padding: 21px 40px;
  }
`;

export const TitleColumn = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.5;
  color: #fafafa;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const HeadersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 109px;
  }
`;
export const HeaderColumn = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.5;
  color: #fafafa;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
