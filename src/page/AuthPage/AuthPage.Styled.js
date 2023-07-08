import styled from 'styled-components';
import bgMobile from '../../images/authPage/bg_mobile.jpg';
import bgMobile2x from '../../images/authPage/bg_mobile2x.jpg';
import bgMobile3x from '../../images/authPage/bg_mobile3x.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: var(--small-screen);
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: var(--medium-screen);
  }

  @media (min-width: 1440px) {
    max-width: var(--large-screen);
  }
`;
export const ImgWrapper = styled.div`
  height: 250px;
  background-repeat: no-repeat;
  background-image: url(${bgMobile});
  background-size: contain;
  background-position: center 33px;

  /* Перевизначаємо шлях до 2x зображення,
    якщо щільність екрану мінімум 2 */
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }
`;
