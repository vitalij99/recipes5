/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {
  Form,
  FormButton1,
  FormButton2,
  FormInput,
  Wrapper,
} from './SearchForm.styled';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const SearchForm = ({ mainPage, typeQuery }) => {
  const [_, setSearchParams] = useSearchParams();
  const [userSearch, setUserSearch] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  if (mainPage === undefined) {
    mainPage = false;
  }

  // Update the input value when the user switches to the search page
  useEffect(() => {
    if (currentRoute === '/search') {
      const params = new URLSearchParams(location.search);
      const query = params.get('query');
      setUserSearch(query || '');
    }
  }, [currentRoute, location.search]);

  const handleInputChange = e => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userQuery = userSearch.trim();

    if (currentRoute === '/main') {
      navigate(`/search?query=${userQuery}`);
    }

    if (typeQuery === 'query') setSearchParams({ query: userQuery });
    else if (typeQuery === 'ingredient')
      setSearchParams({ ingredient: userQuery });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={userSearch}
          onChange={handleInputChange}
          placeholder={
            typeQuery === 'query' ? 'Enter recipe' : 'Enter ingredient'
          }
        />
        {mainPage ? (
          <FormButton2 type="submit">Search</FormButton2>
        ) : (
          <FormButton1 type="submit">Search</FormButton1>
        )}
      </Form>
    </Wrapper>
  );
};
