import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesList from 'components/CategoriesList/CategoriesList';
import {
  LinkStyled,
  TitleStyled,
  WrapperStyled,
} from './PreviewCategories.Styled';
import { mainThunk } from 'redux/main/mainOperation';
import { selectMainLoad, selectMainResipes } from 'redux/main/mainSelector';
import Container from 'components/Container/Container';

const PreviewCategories = () => {
  const list = useSelector(selectMainResipes);
  const isLoad = useSelector(selectMainLoad);
  const [view, setView] = useState(475);
  const [listView, setListView] = useState([]);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(mainThunk());
  }, [dispath]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1440) {
        setView(1440);
      } else if (screenWidth >= 768) {
        setView(768);
      } else setView(475);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [list]);

  const visibleTodos = useMemo(() => {
    if (view >= 1440) {
      const data = Object.keys(list).map(key => handleSlice(list.key));
      console.log(data);
      setListView(data);
    } else if (view >= 768) {
    } else;
  }, []);

  const toCamelCase = str => {
    const words = str.split('_');
    const capitalizedWords = words.map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join('');
  };

  const handleSlice = allList => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      return allList;
    } else if (screenWidth >= 768) {
      return allList.slice(0, 2);
    } else return [allList[0]];
  };

  return (
    <>
      <Container>
        {list &&
          !isLoad &&
          Object.keys(list).map(key => (
            <div key={key}>
              <TitleStyled>{toCamelCase(key)}</TitleStyled>
              <WrapperStyled>
                <CategoriesList list={handleSlice(list[key])} />
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
