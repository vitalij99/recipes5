import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const ContainerRecipes = styled.section`
  padding: 32px 16px 50px 16px;
  background-color: ${props => props.theme.recipePage.ingredients.background};

  @media (min-width: 768px) {
    padding: 50px 32px 0 32px;
  }
  @media (min-width: 1440px) {
    padding: 50px 100px 0 100px;
  }
`;

export const IngredientsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const Ingredient = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px 29px 14px 14px;
  border-radius: 8px;
  background-color: ${props =>
    props.theme.recipePage.ingredients.list.background};

  @media (min-width: 768px) {
    padding: 33px 58px 33px 40px;
  }
  @media (min-width: 1440px) {
    padding: 27px 70px 27px 58px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageIngredient = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;

  @media (min-width: 768px) {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const IngredientName = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  max-width: 200px;
  color: ${props => props.theme.recipePage.ingredients.list.text};

  @media (min-width: 768px) {
    max-width: 210px;
    font-size: 24px;
    line-height: 1;
  }
  @media (min-width: 768px) {
    max-width: 420px;
  }
`;

export const IngedientsMeasure = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  margin-right: 28px;
  border-radius: 4px;
  padding: 4px;
  background-color: ${props =>
    props.theme.recipePage.ingredients.list.number.background};
  color: ${props => props.theme.recipePage.ingredients.list.number.text};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 4px 8px;
    margin-right: 60px;
  }
  @media (min-width: 1440px) {
    margin-right: 140px;
  }
`;

export const IngedientsInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckContainer = styled.div`
  border: 1px solid
    ${props => props.theme.recipePage.ingredients.list.checkbox.outline};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: transparent;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const CheckIcon = styled(FaCheck)`
  width: 9px;
  height: 9px;
  @media (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;

export const IngredientLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${IngedientsInput}:checked + ${CheckContainer} {
    color: ${props => props.theme.recipePage.ingredients.list.checkbox.icon};
  }
`;

export const recipeOne = {
  _id: '6462a8f74c3d0ddd28897fb8',
  title: 'Mediterranean Pasta Salad',
  category: 'Seafood',
  area: 'Italian',
  instructions:
    'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
  description:
    'A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.',
  thumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
  preview:
    'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/mwtf7uqrnsxvlpjqtslc.jpg',
  time: '27',
  youtube: 'https://www.youtube.com/watch?v=e52IL8zYmaE',
  tags: ['Pasta', 'Baking'],
  ingredients: [
    {
      id: '640c2dd963a319ea671e3724',
      measure: '200 g',
    },
    {
      id: '640c2dd963a319ea671e3663',
      measure: '250 g',
    },
    {
      id: '640c2dd963a319ea671e36dd',
      measure: '1  bunch',
    },
    {
      id: '640c2dd963a319ea671e36cf',
      measure: '350 g',
    },
    {
      id: '640c2dd963a319ea671e36cd',
      measure: '3  tablespoons',
    },
    {
      id: '640c2dd963a319ea671e36f3',
      measure: '40 g',
    },
    {
      id: '640c2dd963a319ea671e3781',
      measure: '200 g',
    },
    {
      id: '640c2dd963a319ea671e375e',
      measure: 'to taste',
    },
    {
      id: '640c2dd963a319ea671e373f',
      measure: 'to taste',
    },
  ],
};

export const ingredientsList = [
  {
    id: '640c2dd963a319ea671e3724',
    name: 'Mozzarella Balls',
    desc: 'Small, round balls of mozzarella cheese that are soft, smooth, and milky in flavor, and are often used as a topping for pizzas, salads, and pasta dishes.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564856/zbhre2hgosydezexwhky.png',
    measure: '200 g',
  },
  {
    id: '640c2dd963a319ea671e3663',
    measure: '250 g',
    name: 'Baby Plum Tomatoes',
    desc: 'The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico. The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564221/hh3a8lt3xeopaaumybd0.png',
  },
  {
    id: '640c2dd963a319ea671e36dd',
    measure: '1  bunch',
    name: 'Fresh Basil',
    desc: 'An aromatic herb with green leaves that are used in many cuisines around the world, particularly in Italian cuisine. It has a sweet, slightly peppery flavor and a strong, pleasant aroma.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/kc3bngtbfjx85mhk6p0i.png',
  },
  {
    id: '640c2dd963a319ea671e36cf',
    measure: '350 g',
    name: 'Farfalle',
    desc: 'A type of pasta shaped like a bow tie or butterfly.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564797/jgwujfs7lp8bvymction.png',
  },
  {
    id: '640c2dd963a319ea671e36cd',
    measure: '3  tablespoons',
    name: 'Extra Virgin Olive Oil',
    desc: 'A high-quality oil made from the first pressing of the olives, with a fruity flavor and low acidity. Often used in dressings and for finishing dishes.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564796/wornokeoy7lwi7soyymw.png',
  },
  {
    id: '640c2dd963a319ea671e36f3',
    measure: '40 g',
    name: 'Green Olives',
    desc: 'Olives that are harvested before they are fully ripe and have a firm texture and slightly bitter flavor commonly used in salads, sandwiches, and as a snack.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/wsc9q0gthn85ppthqizm.png',
  },
  {
    id: '640c2dd963a319ea671e3781',
    measure: '200 g',
    name: 'Tuna',
    desc: 'A saltwater fish with firm, meaty flesh, commonly used in a variety of cuisines, including sushi, salads, and sandwiches.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564914/eny2eswuvz2owcjskgyr.png',
  },
  {
    id: '640c2dd963a319ea671e375e',
    measure: 'to taste',
    name: 'Salt',
    desc: 'Crystalline mineral made of sodium chloride, commonly used as a seasoning and preservative in cooking and food preparation.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564910/a1sigxrvvbfhsrozsshz.png',
  },
  {
    id: '640c2dd963a319ea671e373f',
    measure: 'to taste',
    name: 'Pepper',
    desc: 'A spice made from ground dried peppercorns, commonly used in cooking and as a table seasoning for its pungent and spicy flavor.',
    img: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/qdnacuigdp7bquzjclub.png',
  },
];
