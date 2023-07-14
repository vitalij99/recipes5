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

const PopularRecipe = () => {
  const recipes = [
    {
      id: 1,
      photo: 'recipe1.jpg',
      title: 'Title',
      about:
        'In a bowl, mash the banana with a fork until it resembles a thick purée...',
    },
    {
      id: 2,
      photo: 'recipe2.jpg',
      title: 'Title',
      about:
        'In a bowl, mash the banana with a fork until it resembles a thick purée...',
    },
    {
      id: 3,
      photo: 'recipe3.jpg',
      title: 'Title',
      about:
        'In a bowl, mash the banana with a fork until it resembles a thick purée...',
    },
    {
      id: 4,
      photo: 'recipe4.jpg',
      title: 'Title',
      about:
        'In a bowl, mash the banana with a fork until it resembles a thick purée...',
    },
  ];

  const handleClick = recipeId => {
    console.log(`Переход на страницу рецепта с ID ${recipeId}`);
  };

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

  return (
    <PopularContainer>
      {screenWidth >= 1440 ? <StyledSocialIcons title={'Follow us'} /> : null}
      <Title>Popular recipe</Title>
      <PopularBox>
        {recipes.map(recipe => (
          <ContainerRecipe
            key={recipe.id}
            onClick={() => handleClick(recipe.id)}
          >
            <ImgRecipe src={recipe.photo} alt={recipe.title} />
            <AboutBox>
              <TitleRecipe>{recipe.title}</TitleRecipe>
              <TextRecipe>{recipe.about}</TextRecipe>
            </AboutBox>
          </ContainerRecipe>
        ))}
      </PopularBox>
    </PopularContainer>
  );
};

export default PopularRecipe;
