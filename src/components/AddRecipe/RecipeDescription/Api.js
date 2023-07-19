import { useEffect } from 'react';

const Api = ({ setCategories }) => {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/recipes/category-list');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [setCategories]);

  return null;
};

export default Api;
