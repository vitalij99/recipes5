import styled from 'styled-components';
import SwitchImg from '../../../images/Header/Switch.png';
import SwitchBodyImg from '../../../images/Header/switch-body.png';
import SwitchBodyImgDark from '../../../images/Header/switch-body-dark.png';

export const ThemeToggleStyled = styled.label`
  position: absolute;
  display: inline-block;

  width: 61px;
  height: 27px;
  left: 0;
  bottom: 90px;
  display: flex;
  justify-content: start;

  @media screen and (min-width: 768px) {
    left: 0px;
    bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    left: 1270px;
    top: 24px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
    &:checked + span {
      background-image: url(${SwitchBodyImgDark});
      &::before {
        transform: translateX(30px);
      }
    }
  }
`;

export const SwitchStyled = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${SwitchBodyImg});

  /* border-radius: 20px; */
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    height: 27px;
    width: 27px;
    left: 1px;
    right: 4px;
    top: -1.7px;
    background-image: url(${SwitchImg});
    border-radius: 30px;
    transition: 0.6s;
  }
`;
