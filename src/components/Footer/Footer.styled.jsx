import styled from 'styled-components';

import bgImg from '../../images/Header/spinachFooter.png';
// import bgImgTablet from '../../images/Header/spinach@2x.png';

export const BottomFooter = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 435px;
`;
