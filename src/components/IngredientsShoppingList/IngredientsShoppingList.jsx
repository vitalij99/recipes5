import Container from 'components/Container/Container';
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import { TitlesSection } from './TitlesSection';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/recipe/recipeSelector';
import { removeShoppingList } from 'redux/recipe/recipeSlice';

export const IngredientsShoppingList = () => {
  const [clientHeight, setClientHeight] = useState('');
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);
  const componentRef = useRef(null);

  useEffect(() => {
    if (componentRef.current) {
      const height = componentRef.current.clientHeight;
      setClientHeight(height);
    }
  }, []);

  const handleRemoveShoppingList = id => {
    // console.log(id);
    dispatch(removeShoppingList(id));
  };

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
