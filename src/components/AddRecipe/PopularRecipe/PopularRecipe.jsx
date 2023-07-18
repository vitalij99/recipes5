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

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const checkScreenWidth = () => {
    return window.screen.width;
  };

  const [screenWidth, setScreenWidth] = useState(checkScreenWidth());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(checkScreenWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPopularRecipes();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <PopularContainer>
      {screenWidth >= 1440 ? <StyledSocialIcons title={'Follow us'} /> : null}
      <Title>Popular recipe</Title>
      <PopularBox>
        {recipes.map(({ _id, title, description, preview }) => (
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
    </PopularContainer>
  );
};

export default PopularRecipe;
