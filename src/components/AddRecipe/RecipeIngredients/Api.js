import { useEffect} from 'react';
import axios from "axios";

const Api = ({ setBackendIngredients }) => {
  useEffect(() => {
    const fetchIngredients = async () => {
      try {        
        const response = await axios.get('/ingredients/list');
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
