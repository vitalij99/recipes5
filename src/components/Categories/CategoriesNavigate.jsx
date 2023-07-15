import data from './data';
import { NavLink } from 'react-router-dom';

import { CategoriesNavList } from './Categories.styled';

export const CategoriesNavigate = () => {
  // const categoriesNavigate = useNavigate();

  return (
    <CategoriesNavList>
      {data.map(({ _id, category }) => (
        <li key={_id}>
          <NavLink to={`/categories/${category}`}>
            <p>{category}</p>
          </NavLink>
        </li>
      ))}
    </CategoriesNavList>
  );
};
