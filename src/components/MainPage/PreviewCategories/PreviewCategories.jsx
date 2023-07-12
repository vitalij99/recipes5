import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesList from 'components/CategoriesList/CategoriesList';
import {
  LinkStyled,
  TitleStyled,
  WrapperStyled,
} from './PreviewCategories.Styled';
import { mainThunk } from 'redux/main/mainOperation';
import { selectMainResipes } from 'redux/main/mainSelector';
import Container from 'components/Container/Container';

const PreviewCategories = () => {
  const list = useSelector(selectMainResipes);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(mainThunk());
  }, [dispath]);

  const toCamelCase = str => {
    const words = str.split('_');
    const capitalizedWords = words.map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join('');
  };

  return (
    <>
      <Container>
        {list &&
          Object.keys(list).map(key => (
            <div key={key}>
              <TitleStyled>{toCamelCase(key)}</TitleStyled>
              <WrapperStyled>
                <CategoriesList list={list[key]} />
                <LinkStyled to={`/categories/${toCamelCase(key)}`}>
                  See all
                </LinkStyled>
              </WrapperStyled>
            </div>
          ))}
      </Container>
    </>
  );
};

export default PreviewCategories;
