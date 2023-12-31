import { Link } from 'react-router-dom';
import Error from 'components/Error/Error';
import defaultCategoriesImage from 'images/categories/defaultCategoriesImage.webp';
import {
  CategoriesImg,
  CategoriesImgWrap,
  CategoriesList,
  ProductName,
  ProductNameWrap,
} from './Categories.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/categoriesSelector';

export const CardItem = ({ data }) => {
  const list = useSelector(selectCategories);
  const [categories, setCategories] = useState();
  useEffect(() => {
    if (data) {
      setCategories(data);
    } else {
      setCategories(list);
    }
  }, [data, list]);

  return (
    <CategoriesList>
      {categories &&
        categories.length !== 0 &&
        categories.map(({ _id, title, thumb }) => (
          <li key={_id}>
            <Link to={`/recipe/${_id}`}>
              <CategoriesImgWrap>
                <CategoriesImg
                  src={thumb ? thumb : defaultCategoriesImage}
                  alt={title}
                />
                <ProductNameWrap>
                  <ProductName>{title}</ProductName>
                </ProductNameWrap>
              </CategoriesImgWrap>
            </Link>
          </li>
        ))}
      {categories && categories.length === 0 && <Error></Error>}
    </CategoriesList>
  );
};
