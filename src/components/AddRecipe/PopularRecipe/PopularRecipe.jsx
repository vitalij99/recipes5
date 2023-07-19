import React, { useState, useEffect } from 'react';
import {
  AboutBox,
  ContainerRecipe,
  ImgRecipe,
  PopularBox,
  PopularContainer,
  TextRecipe,
  Title,
  TitleRecipe,
} from './PopularRecipe.styled';
import { StyledSocialIcons } from './SocialIcons.styled';
import { fetchPopularRecipes } from './Api';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchPopularRecipes();
      setRecipes(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getNumberOfItemsToRender = () => {
    if (screenWidth >= 768 && screenWidth < 1440) {
      return 2;
    } else {
      return 4;
    }
  };

  return (
    <PopularContainer>
      {screenWidth >= 1440 ? <StyledSocialIcons title={'Follow us'} /> : null}
      <Title>Popular recipe</Title>
      {isLoading ? (
        <Loader />
      ) : (
        <PopularBox>
          {recipes
            .slice(0, getNumberOfItemsToRender())
            .map(({ _id, title, description, preview }) => (
              <Link key={_id} to={`/recipe/${_id}`}>
                <ContainerRecipe>
                  <ImgRecipe src={preview} alt={title} />
                  <AboutBox>
                    <TitleRecipe>{title}</TitleRecipe>
                    <TextRecipe>{description}</TextRecipe>
                  </AboutBox>
                </ContainerRecipe>
              </Link>
            ))}
        </PopularBox>
      )}
    </PopularContainer>
  );
};

export default PopularRecipe;
