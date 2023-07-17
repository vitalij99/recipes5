import { CategoriesNavigateWrap } from './Categories.styled';
import { CardItem } from './CardItem';
import { CategoriesNavigate } from './CategoriesNavigate';
import data from './data';

export const Categories = () => {
  // const [categories, setCategories] = useState([]);

  return (
    <>
      <CategoriesNavigateWrap>
        <CategoriesNavigate />
      </CategoriesNavigateWrap>
      <CardItem data={data} />
    </>
  );
};

// import { CategoriesNavigateWrap } from './Categories.styled';
// import { CardItem } from './CardItem';
// import { CategoriesNavigate } from './CategoriesNavigate';
// import { useSelector } from 'react-redux';

// // const data = useSelector(selectCategories);
// // const dispatch = useDispatch();
// // useEffect(() => {
// //   dispatch(categoriesThunk());
// // }, [dispatch]);

// export const Categories = () => {
//   const data = useSelector()
//   return (
//     <>
//       <CategoriesNavigateWrap>
//         <CategoriesNavigate />
//       </CategoriesNavigateWrap>
//       <CardItem data={data} />
//     </>
//   );
// };
