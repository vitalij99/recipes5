import Container from 'components/Container/Container';
import {
  CheckContainer,
  CheckIcon,
  ContainerRecipes,
  ImageIngredient,
  IngedientsInput,
  IngedientsMeasure,
  Ingredient,
  IngredientLabel,
  IngredientName,
  IngredientsWrapper,
  WrapperContent,
  ingredientsList,
} from './RecipeIngredients.styled';

import IngredientsHeader from 'components/IngredientsHeader/IngredientsHeader';

function RecipeIngredients({ ingredients }) {
  const ingredientOnRecipe = ingredientsList.filter(
    val => val.id !== ingredients.id
  );

  return (
    <ContainerRecipes>
      <Container>
        <IngredientsHeader info="Ingredients" actions="Add to list" />
        <IngredientsWrapper>
          {ingredientOnRecipe.map(({ id, name, descr, img, measure }) => {
            return (
              <Ingredient key={id}>
                <WrapperContent>
                  <ImageIngredient src={img} alt="Ingredient" />
                  <IngredientName>{name}</IngredientName>
                </WrapperContent>
                <WrapperContent>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <IngredientLabel htmlFor={id}>
                    <IngedientsInput type="checkbox" id={id} />
                    <CheckContainer>
                      <CheckIcon />
                    </CheckContainer>
                  </IngredientLabel>
                </WrapperContent>
              </Ingredient>
            );
          })}
        </IngredientsWrapper>
      </Container>
    </ContainerRecipes>
  );
}

export default RecipeIngredients;
