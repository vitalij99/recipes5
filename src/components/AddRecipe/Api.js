import axios from 'axios';

const BASE_URL = 'https://yummy-service.onrender.com';

const sendRecipeData = async (recipeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/recipes/own-recipes`, recipeData);
    return response.data; 
  } catch (error) {
    throw new Error('Error while adding the recipe:', error.message);
  }
};

export default sendRecipeData;
