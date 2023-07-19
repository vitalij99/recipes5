import { CardItem } from 'components/Categories/CardItem';
import Container from 'components/Container/Container';
import { Section } from 'components/Search/SearchedRecipesList/SearchRecipesList.styled';
import React, { useEffect, useMemo, useState } from 'react';

import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const SearchRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [listRes, setListRes] = useState([]);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { query, ingredient } = params;
        if (query) {
          const { data } = await axios.get(`recipes/search?title=${query}`);
          setListRes(data);
        } else if (ingredient) {
          const { data } = await axios.get(
            `/recipes/ingredients?ingredients=${ingredient}`
          );
          setListRes(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params]);

  return (
    <>
      <Section>
        <Container>
          {!listRes || listRes.length === 0 ? (
            <SearchNotFound text={'Try looking for something else...'} />
          ) : (
            <CardItem data={listRes} />
          )}
        </Container>
      </Section>
    </>
  );
};
