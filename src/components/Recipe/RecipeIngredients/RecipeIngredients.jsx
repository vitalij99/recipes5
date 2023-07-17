import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addShoppingList,
  fetchIngradients,
  fetchShoppingList,
  // removeShoppingList,
} from 'redux/recipe/recipeOperetion';
import {
  selectIngredients,
  selectShoppingList,
} from 'redux/recipe/recipeSelector';

import IngradientsHeader from 'components/IngredientsHeader/IngredientsHeader';
import defaultFotoIngredient from '../../../images/Recipe/defaultFotoIngredient.png';
import PresentModal from '../PresentModal/PresentModal';
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
} from './RecipeIngredients.styled';

import { nanoid } from '@reduxjs/toolkit';
import { removeShoppingList } from 'redux/recipe/recipeSlice';

function RecipeIngredients({ ingredients }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [event, setEvent] = useState(null);

  const allIngradientsList = useSelector(selectIngredients);
  const shoppingList = useSelector(selectShoppingList);

  const isIngredientInShoppingList = _id => {
    return shoppingList.some(item => item.id === _id);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngradients());
    dispatch(fetchShoppingList());

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

  const handleInputChange = e => {
    if (shoppingList.length === 0) {
      setEvent('firstShopping');
    }

    const { id } = e.target;
    const currentIngredient = ingredientsList.find(val => val._id === id);

    const { _id, name, img, measure } = currentIngredient;
    const ingredientOnShoppingList = shoppingList.some(val => val.id === id);
    const ingredientForBuy = {
      measure,
      id: _id,
      name,
      img,
      shoppingListId: nanoid(),
    };

    if (!ingredientOnShoppingList) {
      dispatch(addShoppingList(ingredientForBuy));
    } else {
      dispatch(removeShoppingList(ingredientForBuy));
    }
  };

  return (
    <>
      {event === 'firstShopping' && (
        <PresentModal event={event} onClose={true} />
      )}
      <ContainerRecipes>
        <Container>
          <IngradientsHeader info="Ingredients" actions="Add to list" />
          <IngredientsWrapper>
            {ingredientsList?.map(({ _id, name, img, measure }) => {
              const isChecked = isIngredientInShoppingList(_id);

              return (
                <Ingredient key={_id}>
                  <WrapperContent>
                    <ImageIngredient
                      src={img ? img : defaultFotoIngredient}
                      alt="Ingradient"
                    />

                    <IngredientName>{name}</IngredientName>
                  </WrapperContent>
                  <WrapperContent>
                    <IngedientsMeasure>{measure}</IngedientsMeasure>

                    <IngredientLabel htmlFor={_id}>
                      <IngedientsInput
                        type="checkbox"
                        id={_id}
                        checked={isChecked}
                        value={_id}
                        onChange={handleInputChange}
                      />

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
    </>
  );
}

export default RecipeIngredients;
