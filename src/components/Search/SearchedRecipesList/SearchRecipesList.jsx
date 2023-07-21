import { CardItem } from 'components/Categories/CardItem';
import Container from 'components/Container/Container';
import { Section } from 'components/Search/SearchedRecipesList/SearchRecipesList.styled';
import React, { useEffect, useMemo } from 'react';

import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import { useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { searchIsLoading, searchResults } from 'redux/search/searchSelectors';
import {
  searchIngredientsThunk,
  searchTitleThunk,
} from 'redux/search/searchOperations';

export const SearchRecipesList = () => {
  const searchResultsList = useSelector(searchResults);
  const searchLoading = useSelector(searchIsLoading);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    const { query, ingredient } = params;
    if (query) {
      dispatch(searchTitleThunk(query));
    }
    if (ingredient) {
      dispatch(searchIngredientsThunk(ingredient));
    }
  }, [dispatch, params]);

  return (
    <>
      {searchLoading ? (
        <Loader />
      ) : (
        <Section>
          <Container>
            {searchResultsList.length === 0 ? (
              <SearchNotFound text={'Try looking for something else...'} />
            ) : (
              <CardItem data={searchResultsList} />
            )}
          </Container>
        </Section>
      )}
    </>
  );
};
