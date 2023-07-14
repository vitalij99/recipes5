import PreviewCategories from 'components/MainPage/PreviewCategories/PreviewCategories';

import СhooseYourBreakfast from 'components/MainPage/СhooseYourBreakfast/СhooseYourBreakfast';
import Hero from 'components/MainPage/Hero/Hero';
import { MainWrapper } from './MainPage.Styled';

const MainPage = () => {
  return (
    <>
      <MainWrapper>
        <Hero />
        <PreviewCategories />
        <СhooseYourBreakfast />
      </MainWrapper>
    </>
  );
};

export default MainPage;
