import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoriesImgWrap,
  CategoriesImg,
  ProductNameWrap,
  ProductName,
} from './CategoriesList.Styled';

const CategoriesList = data => {
  return (
    <>
      {data.map(({ _id, title, thumb }) => (
        <li key={_id}>
          <Link to={`/recipe/${_id}`}>
            <CategoriesImgWrap>
              <CategoriesImg src={thumb} alt="img" />
              <ProductNameWrap>
                <ProductName>{title}</ProductName>
              </ProductNameWrap>
            </CategoriesImgWrap>
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoriesList;
