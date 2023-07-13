import Container from 'components/Container/Container';
import React from 'react'; // useEffect
import { Section } from './IngredientsShoppingList.styled';
import { ListSection } from './ListSection';

import { TitlesSection } from './TitlesSection';
import // useDispatch,
// useSelector,
'react-redux';
// import { selectShoppingList } from 'redux/recipe/recipeSelector';

export const IngredientsShoppingList = () => {
  // const dispatch = useDispatch();
  // const shoppingList = useSelector(selectShoppingList);

  return (
    <>
      <Section>
        <Container>
          <TitlesSection />
          <ListSection data={[]} />
        </Container>
      </Section>
    </>
  );
};
