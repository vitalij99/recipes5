import Container from 'components/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import { TitlesSection } from './TitlesSection';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchShoppingList,
  removeShoppingList,
} from 'redux/recipe/recipeOperetion';
import { getIsLoading, selectShoppingList } from 'redux/recipe/recipeSelector';
import Loader from 'components/Loader/Loader';

export const IngredientsShoppingList = () => {
  const [clientHeight, setClientHeight] = useState('');

  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  const isLoading = useSelector(getIsLoading);

  const componentRef = useRef(null);

  useEffect(() => {
    dispatch(fetchShoppingList());
    if (componentRef.current) {
      const height = componentRef.current.clientHeight;
      setClientHeight(height);
    }
  }, [dispatch]);

  const handleRemoveShoppingList = id => {
    dispatch(removeShoppingList(id));
  };

  return (
    <>
      <Section ref={componentRef} style={{ minHeight: `${clientHeight}px` }}>
        <Container>
          <TitlesSection />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {shoppingList !== undefined ? (
                <ListSection
                  data={shoppingList}
                  onClick={handleRemoveShoppingList}
                />
              ) : null}
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
