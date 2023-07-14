import { ThemeToggleStyled, SwitchStyled } from './ThemeToggle.styled';
import SwitchImg from '../../../images/Header/Switch.png';
import SwitchBodyImg from '../../../images/Header/switch-body.png';

const ThemeToggle = () => {
  return (
    <ThemeToggleStyled>
      <img src={SwitchBodyImg} alt="Switch Body" />

      <SwitchStyled>
        <img src={SwitchImg} alt="Switch" />
      </SwitchStyled>
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
