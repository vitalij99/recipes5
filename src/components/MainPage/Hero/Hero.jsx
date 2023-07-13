import Container from 'components/Container/Container';
import {
  BoxStyled,
  InformFieldStyled,
  ParagrafStyled,
  SpanTitle,
  TitleStyled,
  WraooerSearchStyled,
  WrapperStyled,
} from './Hero.styled';
import { InformMenu } from './InformMenu/InformMenu';
import Search from 'components/Search/Search';

const Hero = () => {
  return (
    <WrapperStyled>
      <Container>
        <BoxStyled>
          <TitleStyled>
            <SpanTitle>So</SpanTitle>Yummy
          </TitleStyled>
          <ParagrafStyled>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </ParagrafStyled>
        </BoxStyled>
        <InformFieldStyled />
        <InformMenu />
        <WraooerSearchStyled>
          <Search />
        </WraooerSearchStyled>
      </Container>
    </WrapperStyled>
  );
};

export default Hero;
