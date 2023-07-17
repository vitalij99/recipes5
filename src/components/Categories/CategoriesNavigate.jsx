// import { NavLink } from 'react-router-dom';
import {
  CategoriesNavItem,
  CategoriesNavList,
  NavLinkStyle,
} from './Categories.styled';
import { useSelector } from 'react-redux';
import { selectCategoriesList } from 'redux/categories/categoriesSelector';

export const CategoriesNavigate = () => {
  const categories = useSelector(selectCategoriesList);

  return (
    <CategoriesNavList>
      {categories.map(item => {
        return (
          <CategoriesNavItem key={item}>
            <NavLinkStyle to={`/categories/${item}`}>
              <p>{item}</p>
            </NavLinkStyle>
          </CategoriesNavItem>
        );
      })}
    </CategoriesNavList>
  );
};
