import { CategoriesNavigateWrap } from './Categories.styled';
import { CardItem } from './CardItem';
import { CategoriesNavigate } from './CategoriesNavigate';
import data from './data';

// const data = useSelector(selectCategories);
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(categoriesThunk());
// }, [dispatch]);

export const Categories = () => {
  return (
    <>
      <CategoriesNavigateWrap>
        <CategoriesNavigate />
      </CategoriesNavigateWrap>
      <CardItem data={data} />
    </>
  );
};
