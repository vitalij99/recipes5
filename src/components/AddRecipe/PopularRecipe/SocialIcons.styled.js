import styled from 'styled-components';
import {
  Title,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  IconContainer,
  LinkSocial,
} from 'components/SocialIcons/SocialIcons.styled';
import SocialIcons from 'components/SocialIcons/SocialIcons';

const StyledSocialIcons = styled(SocialIcons)`
  ${IconContainer} {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 100px;
  }

  ${Title} {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.24px;
    margin-bottom: 40px;
  }

  ${LinkSocial} {
    display: block;
    width: 26px;
    height: 26px;
  }

  ${FacebookLogo} {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.mainPage.footer.iconsList.color};
    &:hover {
      fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
    }
  }

  ${InstagramLogo} {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.mainPage.footer.iconsList.color};
    &:hover {
      fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
    }
  }

  ${TwitterLogo} {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.mainPage.footer.iconsList.color};
    &:hover {
      fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
    }
  }

  ${YoutubeLogo} {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.mainPage.footer.iconsList.color};
    &:hover {
      fill: ${props => props.theme.mainPage.footer.iconsList.hoverColor};
    }
  }
`;

export { StyledSocialIcons };
