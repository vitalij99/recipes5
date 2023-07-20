import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addShoppingList,
  fetchIngradients,
  fetchShoppingList,
  removeShoppingList,
} from 'redux/recipe/recipeOperetion';
import {
  selectIngredients,
  selectOperetion,
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
import { Audio } from 'react-loader-spinner';

function RecipeIngredients({ ingredients, recipeId }) {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [event, setEvent] = useState(null);

  const allIngradientsList = useSelector(selectIngredients);
  const shoppingList = useSelector(selectShoppingList);
  const operetion = useSelector(selectOperetion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngradients());
    dispatch(fetchShoppingList());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  useEffect(() => {
    const ingradientsWithSameId = allIngradientsList
      .filter(val => ingredients?.map(item => item.id).includes(val._id))
      .map(val => ({
        ...val,
        measure: ingredients?.find(item => item.id === val._id).measure,
        ingredientId: val._id,
        recipeId,
      }));
    setIngredientsList(ingradientsWithSameId);
  }, [ingredients, allIngradientsList, recipeId]);

  const handleInputChange = e => {
    if (shoppingList.length === 0) {
      setEvent('firstShopping');
    }

    const { id } = e.target;

    const currentIngredient = ingredientsList.find(
      val => val.ingredientId === id
    );

    const { ingredientId, name, img, measure } = currentIngredient;
    const ingredientOnShoppingList = shoppingList.find(val => {
      const res =
        val.ingredientId === ingredientId && val.recipeId === recipeId;
      return res;
    });

    const ingredientForBuy = {
      measure,
      name,
      img,
      ingredientId,
      recipeId,
    };

    if (!ingredientOnShoppingList) {
      dispatch(addShoppingList(ingredientForBuy));
    } else {
      const { _id } = ingredientOnShoppingList;
      dispatch(removeShoppingList([_id, id]));
    }
  };

  function hasIngredientsInShoppingList(recipeId, ingredientId) {
    const hasIngredient = shoppingList.some(item => {
      const res =
        item.recipeId === recipeId && item.ingredientId === ingredientId;
      return res;
    });
    return hasIngredient;
  }

  return (
    <>
      {event === 'firstShopping' && (
        <PresentModal event={event} onClose={true} />
      )}
      <ContainerRecipes>
        <Container>
          <IngradientsHeader info="Ingredients" actions="Add to list" />
          <IngredientsWrapper>
            {ingredientsList?.map(({ ingredientId, name, img, measure }) => {
              return (
                <Ingredient key={ingredientId}>
                  <WrapperContent>
                    <ImageIngredient
                      src={img ? img : defaultFotoIngredient}
                      alt="Ingradient"
                    />

                    <IngredientName>{name}</IngredientName>
                  </WrapperContent>
                  <WrapperContent>
                    <IngedientsMeasure>{measure}</IngedientsMeasure>

                    <IngredientLabel htmlFor={ingredientId}>
                      {operetion === ingredientId ? (
                        <Audio
                          height="35"
                          width="35"
                          color="#8BAA36"
                          ariaLabel="audio-loading"
                          wrapperStyle={{}}
                          wrapperClass="wrapper-class"
                          visible={true}
                        />
                      ) : (
                        <>
                          <IngedientsInput
                            type="checkbox"
                            id={ingredientId}
                            checked={hasIngredientsInShoppingList(
                              recipeId,
                              ingredientId
                            )}
                            value={ingredientId}
                            onChange={handleInputChange}
                          />

                          <CheckContainer>
                            <CheckIcon />
                          </CheckContainer>
                        </>
                      )}
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
