import { NavLink } from 'react-router-dom';
import { CategoriesNavList } from './Categories.styled';
import { useSelector } from 'react-redux';
import { selectCategoriesList } from 'redux/categories/categoriesSelector';

export const CategoriesNavigate = () => {
  const categories = useSelector(selectCategoriesList);

  return (
    <CategoriesNavList>
      {categories.map(item => {
        return (
          <li key={item}>
            <NavLink to={`/categories/${item}`}>
              <p>{item}</p>
            </NavLink>
          </li>
        );
      })}
    </CategoriesNavList>
  );
};
