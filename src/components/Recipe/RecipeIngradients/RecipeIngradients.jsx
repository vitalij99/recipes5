import Container from 'components/Container/Container';
import {
  CheckContainer,
  CheckIcon,
  ContainerRecipes,
  ImageIngradient,
  IngedientsInput,
  IngedientsMeasure,
  Ingradient,
  IngradientLabel,
  IngradientName,
  IngradientsWrapper,
  WrapperContent,
  ingredientsList,
} from './RecipeIngradients.styled';

import IngradientsHeader from 'components/IngradientsHeader/IngradientsHeader';

function RecipeIngradients({ ingredients }) {
  const ingradientOnRecipe = ingredientsList.filter(
    val => val.id !== ingredients.id
  );

  return (
    <ContainerRecipes>
      <Container>
        <IngradientsHeader info="Ingredients" actions="Add to list" />
        <IngradientsWrapper>
          {ingradientOnRecipe.map(({ id, name, descr, img, measure }) => {
            return (
              <Ingradient key={id}>
                <WrapperContent>
                  <ImageIngradient src={img} alt="Ingradient" />
                  <IngradientName>{name}</IngradientName>
                </WrapperContent>
                <WrapperContent>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <IngradientLabel htmlFor={id}>
                    <IngedientsInput type="checkbox" id={id} />
                    <CheckContainer>
                      <CheckIcon />
                    </CheckContainer>
                  </IngradientLabel>
                </WrapperContent>
              </Ingradient>
            );
          })}
        </IngradientsWrapper>
      </Container>
    </ContainerRecipes>
  );
}

export default RecipeIngradients;
