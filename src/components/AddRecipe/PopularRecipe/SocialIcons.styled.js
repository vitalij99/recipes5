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
    display: block;
  }
  ${Title} {
  }
  ${FacebookLogo} {
  }
  ${InstagramLogo} {
  }
  ${TwitterLogo} {
  }
  ${YoutubeLogo} {
  }
  ${IconContainer} {
  }
  ${LinkSocial} {
  }
`;

export { StyledSocialIcons };
