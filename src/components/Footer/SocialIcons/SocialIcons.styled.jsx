import styled from 'styled-components';


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 

`;

export const LinkSocial = styled.a`
    &:hover svg path {
        fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
  }

  &:not(:last-child) {
    margin-right: 14px;
  }

   @media (min-width: 768px) {
     &:not(:last-child) {
    margin-right: 18px;
    }
  }
`;