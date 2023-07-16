const { styled } = require('styled-components');

export const Section = styled.div`
  background-color: ${props => props.theme.searchPage.background};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  /* padding-bottom: 42px; */

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin-right: 15px;
    color: ${props => props.theme.searchPage.searchBy.text1};
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.24px;
      margin-right: 18px;
    }

    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
