import { Link } from 'react-router-dom';

import {
  CategoriesImg,
  CategoriesImgWrap,
  CategoriesList,
  ProductName,
  ProductNameWrap,
} from './Categories.styled';

export const CardItem = ({ data }) => {
  console.log(data);
  return (
    <CategoriesList>
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
    </CategoriesList>
  );
};

// import { Link } from 'react-router-dom';

// import {
//   CategoriesImg,
//   CategoriesImgWrap,
//   CategoriesList,
//   ProductName,
//   ProductNameWrap,
// } from './Categories.styled';
// import { useSelector } from 'react-redux';
// import { selectCategories } from 'redux/categories/categoriesSelector';

// export const CardItem = () => {
//   const categoriesCard = useSelector(selectCategories);
//   return (
//     <CategoriesList>
//       {categoriesCard.map(({ _id, title, thumb }) => (
//         <li key={_id}>
//           <Link to={`/recipe/${_id}`}>
//             <CategoriesImgWrap>
//               <CategoriesImg src={thumb} alt="img" />
//               <ProductNameWrap>
//                 <ProductName>{title}</ProductName>
//               </ProductNameWrap>
//             </CategoriesImgWrap>
//           </Link>
//         </li>
//       ))}
//     </CategoriesList>
//   );
// };
