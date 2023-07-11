import data from './data';
import Container from 'components/Container/Container';
import { Link } from 'react-router-dom';

import {
  CategoriesImg,
  CategoriesList,
  ProductName,
  Title,
} from './Categories.styled';

export const Categories = () => {
  const CategoriesCard = data.map(({ _id, title, thumb }) => (
    <li key={_id}>
      <Link to={`/recipe/${'6462a8f74c3d0ddd28897fb8'}`}>
        <CategoriesImg src={thumb} alt="img" />
        <ProductName>{title}</ProductName>
      </Link>
    </li>
  ));

  return (
    <Container>
      <Title>Categories</Title>
      <CategoriesList>{CategoriesCard}</CategoriesList>
    </Container>
  );
};
