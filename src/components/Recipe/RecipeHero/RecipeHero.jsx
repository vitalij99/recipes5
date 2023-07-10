import Container from 'components/Container/Container';
import {
  HeroBtn,
  HeroDescr,
  HeroSvg,
  HeroTime,
  HeroTimeBlock,
  HeroTitle,
  RecipeHeroWrapper,
} from './RecipeHero.styled';

function RecipeHero({ time, title, description }) {
  return (
    <RecipeHeroWrapper>
      <Container>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescr>{description}</HeroDescr>
        <HeroBtn>Add to favorite recipes</HeroBtn>
        <HeroTimeBlock>
          <HeroSvg />
          <HeroTime>{time} min</HeroTime>
        </HeroTimeBlock>
      </Container>
    </RecipeHeroWrapper>
  );
}

export default RecipeHero;
