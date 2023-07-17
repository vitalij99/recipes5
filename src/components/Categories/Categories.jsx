import { CategoriesNavigateWrap } from './Categories.styled';
import { CardItem } from './CardItem';
import { CategoriesNavigate } from './CategoriesNavigate';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  categoriesListThunk,
  categoriesThunk,
} from 'redux/categories/categoriesOperation';

export const Categories = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  console.log(categoryName);

  useEffect(() => {
    dispatch(categoriesThunk(categoryName));
  }, [categoryName, dispatch]);

  useEffect(() => {
    dispatch(categoriesListThunk());
  }, [dispatch]);

  return (
    <>
      <CategoriesNavigateWrap>
        <CategoriesNavigate />
      </CategoriesNavigateWrap>
      <CardItem />
    </>
  );
};
