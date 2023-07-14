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
// if you need to change syles for icons in popular recipes componont
const StyledSocialIcons = styled(SocialIcons)`
  ${IconContainer} {
    justify-content: flex-start;
    margin-bottom: 100px;
  }

  ${Title} {
  }

  ${LinkSocial} {
  }

  ${FacebookLogo} {
  }

  ${InstagramLogo} {
  }

  ${TwitterLogo} {
  }

  ${YoutubeLogo} {
  }
`;

export { StyledSocialIcons };
