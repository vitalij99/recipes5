import { CategoriesSection } from './Categories.styled';
import { CardItem } from './CardItem';
import { CategoriesNavigate } from './CategoriesNavigate';
import data from './data';

export const Categories = () => {
  return (
    <CategoriesSection>
      <CategoriesNavigate />
      <CardItem data={data} />
    </CategoriesSection>
  );
};
