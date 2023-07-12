import { Link } from 'react-router-dom';
import {
  CategoriesImgWrap,
  CategoriesImg,
  ProductNameWrap,
  ProductName,
  CategoriesListStyled,
} from './CategoriesList.Styled';

const CategoriesList = ({ list }) => {
  return (
    <>
      <CategoriesListStyled>
        {list &&
          list.map(({ _id, title, thumb }) => (
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
      </CategoriesListStyled>
    </>
  );
};

export default CategoriesList;
