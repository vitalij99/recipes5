import Container from 'components/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import { TitlesSection } from './TitlesSection';
import { useDispatch, useSelector } from 'react-redux';

import { removeShoppingList } from 'redux/recipe/recipeSlice';
import { shoppingListSelector } from 'redux/shopping/shoppingListSelectors';
import { shoppingListThunk } from 'redux/shopping/shoppingListOperations';

export const IngredientsShoppingList = () => {
  const [clientHeight, setClientHeight] = useState('');

  const dispatch = useDispatch();
  const shoppingList = useSelector(shoppingListSelector).filter(
    item => item && item.id !== undefined
  );

  console.log(shoppingList);
  const componentRef = useRef(null);

  useEffect(() => {
    dispatch(shoppingListThunk());
    if (componentRef.current) {
      const height = componentRef.current.clientHeight;
      setClientHeight(height);
    }
  }, [dispatch]);

  const handleRemoveShoppingList = id => {
    // console.log(id);
    dispatch(removeShoppingList(id));
  };

  // { measure, id: _id, name, img, recipeId }

  return (
    <>
      <Section ref={componentRef} style={{ minHeight: `${clientHeight}px` }}>
        <Container>
          <TitlesSection />

          <ListSection data={shoppingList} onClick={handleRemoveShoppingList} />
        </Container>
      </Section>
    </>
  );
};
