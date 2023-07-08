import React, { useState, useEffect } from 'react';

const RecipeIngredientsFields = ({ ingredients, setIngredients }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [count, setCount] = useState(1);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleSearchTermChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSelectIngredient = (index, selectedValue) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = selectedValue;
    setIngredients(updatedIngredients);
  };

  useEffect(() => {
    // Запрос на бекенд
    const backendIngredients = [
      { id: 1, name: 'Cucumber' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lime' },
    ];

    // Фильтрация ингредиентов по поисковому запросу
    const filteredIngredients = backendIngredients.filter((ingredient) =>
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
  }, [ingredients.length,setIngredients ]);

  return (
    <div>
      <h3>Ingredients</h3>
      <button type="button" onClick={removeIngredientField}>-</button>
      <span>{count}</span>
      <button type="button" onClick={addIngredientField}>+</button>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Search or Enter Ingredient"
          />
          <select
            value={ingredient.name}
            onChange={(e) => handleSelectIngredient(index, e.target.value)}
          >
            <option value=""></option>
            {ingredientOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={ingredient.amount}
            onChange={(e) =>
              handleIngredientChange(index, 'amount', e.target.value)
            }
            placeholder="Amount"
          />
          <select
            value={ingredient.unit}
            onChange={(e) =>
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