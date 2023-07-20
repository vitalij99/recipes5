import { useEffect} from 'react';
import axios from "axios";

const Api = ({ setBackendIngredients }) => {
  useEffect(() => {
    const fetchIngredients = async () => {
      try {        
        const {data} = await axios.get('/ingredients/list');
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
