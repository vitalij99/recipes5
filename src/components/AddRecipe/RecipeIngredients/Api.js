import { useEffect} from 'react';

const Api = ({ setBackendIngredients }) => {
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('https://yummy-service.onrender.com/ingredients/list');
        const data = await response.json();
        setBackendIngredients(data);
      } catch (error) {
        console.log('Error fetching ingredients:', error);
      }
    };

    fetchIngredients();
  }, [setBackendIngredients]);

  return null;
};

export default Api;
