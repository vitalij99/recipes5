import axios from 'axios';

const BASE_URL = 'https://yummy-service.onrender.com'; 

export const fetchPopularRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/popular/recipes`);
    return response.data.popularRecipes;
  } catch (error) {
    console.error('Error fetching popular recipes:', error.message);
    return [];
  }
};
