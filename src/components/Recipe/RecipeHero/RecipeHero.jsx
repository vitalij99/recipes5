import {
  HeroBtn,
  HeroDescr,
  HeroTime,
  HeroTimeBlock,
  HeroTitle,
  RecipeHeroWrapper,
} from './RecipeHero.styled';
import { BsClock } from 'react-icons/bs';

function RecipeHero() {
  return (
    <RecipeHeroWrapper>
      <HeroTitle>Salmon Avocado Salad</HeroTitle>
      <HeroDescr>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </HeroDescr>
      <HeroBtn>Add to favorite recipes</HeroBtn>
      <HeroTimeBlock>
        <BsClock size="14px" fill="#23262A" />
        <HeroTime> 20 min</HeroTime>
      </HeroTimeBlock>
    </RecipeHeroWrapper>
  );
}

export default RecipeHero;
