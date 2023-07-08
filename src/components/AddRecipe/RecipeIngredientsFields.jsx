import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const RecipeIngredientsFields = ({ ingredients, setIngredients }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [count, setCount] = useState(1);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleSelectIngredient = (index, selectedOption) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = selectedOption.value;
    setIngredients(updatedIngredients);
  };

  useEffect(() => {
    // Backend request
    const backendIngredients = [
      { id: 1, name: 'Cucumber' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lime' },
    ];

    // Filter ingredients based on search term
    const filteredIngredients = backendIngredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setIngredientOptions(filteredIngredients);
  }, [searchTerm]);

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: '' }]);
    setCount(count + 1);
  };

  const removeIngredientField = () => {
    if (ingredients.length > 1) {
      const updatedIngredients = [...ingredients];
      updatedIngredients.pop();
      setIngredients(updatedIngredients);
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setCount(ingredients.length);
  }, [ingredients]);

  useEffect(() => {
    if (ingredients.length === 0) {
      setIngredients([{ name: '', amount: '', unit: '' }]);
    }
  }, [ingredients.length, setIngredients]);

  return (
    <div>
      <h3>Ingredients</h3>
      <button type="button" onClick={removeIngredientField}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={addIngredientField}>
        +
      </button>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <Select
            value={
              ingredient.name
                ? { value: ingredient.name, label: ingredient.name }
                : null
            }
            options={[
              { value: '', label: 'Select ingredient', isDisabled: true },
              ...ingredientOptions.map(option => ({
                value: option.name,
                label: option.name,
              })),
            ]}
            onChange={selectedOption =>
              handleSelectIngredient(index, selectedOption)
            }
            placeholder="Select ingredient"
          />
          <input
            type="text"
            value={ingredient.amount}
            onChange={e =>
              handleIngredientChange(index, 'amount', e.target.value)
            }
            placeholder="Amount"
          />
          <select
            value={ingredient.unit}
            onChange={e =>
              handleIngredientChange(index, 'unit', e.target.value)
            }
          >
            <option value=""></option>
            <option value="tbs">tbs</option>
            <option value="tsp">tsp</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default RecipeIngredientsFields;
