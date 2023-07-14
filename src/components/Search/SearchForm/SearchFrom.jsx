import { useState } from 'react';
import {
  Form,
  FormButton1,
  FormButton2,
  FormInput,
  Wrapper,
} from './SearchForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchForm = ({ mainPage }) => {
  const [userSearch, setUserSearch] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  if (mainPage === undefined) {
    mainPage = false;
  }

  const handleInputChange = e => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userQuery = userSearch.trim();
    setQuery(userQuery);

    console.log(query);

    if (currentRoute === '/main') {
      navigate(`/search?q=${userQuery}`);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={userSearch}
          onChange={handleInputChange}
          placeholder="Enter recipe"
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
