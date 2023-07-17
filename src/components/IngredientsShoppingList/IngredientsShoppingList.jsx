import Container from 'components/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import { TitlesSection } from './TitlesSection';
import { useDispatch, useSelector } from 'react-redux';

import { shoppingListSelector } from 'redux/shopping/shoppingListSelectors';
import {
  shoppingListRemoveItemThunk,
  shoppingListThunk,
} from 'redux/shopping/shoppingListOperations';

export const IngredientsShoppingList = () => {
  const [clientHeight, setClientHeight] = useState('');

  const dispatch = useDispatch();
  const shoppingList = useSelector(shoppingListSelector);

  // console.log(shoppingList);
  const componentRef = useRef(null);

  useEffect(() => {
    dispatch(shoppingListThunk());
    if (componentRef.current) {
      const height = componentRef.current.clientHeight;
      setClientHeight(height);
    }
  }, [dispatch]);

  const handleRemoveShoppingList = id => {
    // console.log('we are trying to remove shopping-list item');
    dispatch(shoppingListRemoveItemThunk(id));
  };

  return (
    <>
      <Section ref={componentRef} style={{ minHeight: `${clientHeight}px` }}>
        <Container>
          <TitlesSection />
          {shoppingList !== undefined ? (
            <ListSection
              data={shoppingList}
              onClick={handleRemoveShoppingList}
            />
          ) : null}
        </Container>
      </Section>
    </>
  );
};
