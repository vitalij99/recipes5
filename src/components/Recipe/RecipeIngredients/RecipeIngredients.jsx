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
} from './RecipeIngredients.styled';

import IngradientsHeader from 'components/IngradientsHeader/IngradientsHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngradients } from 'redux/recipe/recipeOperetion';
import { selectIngredients } from 'redux/recipe/recipeSelector';

function RecipeIngradients({ ingredients }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const allIngradientsList = useSelector(selectIngredients);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngradients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ingradientsWithSameId = allIngradientsList
      .filter(val => ingredients?.map(item => item.id).includes(val._id))
      .map(val => ({
        ...val,
        measure: ingredients?.find(item => item.id === val._id).measure,
      }));
    setIngredientsList(ingradientsWithSameId);
  }, [ingredients, allIngradientsList]);

  return (
    <ContainerRecipes>
      <Container>
        <IngradientsHeader info="Ingredients" actions="Add to list" />
        <IngradientsWrapper>
          {ingredientsList?.map(({ _id, name, descr, img, measure }) => {
            return (
              <Ingradient key={_id}>
                <WrapperContent>
                  <ImageIngradient src={img} alt="Ingradient" />
                  <IngradientName>{name}</IngradientName>
                </WrapperContent>
                <WrapperContent>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <IngradientLabel htmlFor={_id}>
                    <IngedientsInput type="checkbox" id={_id} />
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
