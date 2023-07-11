import React, { useState, useEffect } from 'react';
import { Form } from '../RecipeDescription/RecipeDescription.styled';

import {
  BtnBox,
  BtnCountMinus,
  BtnCountPlus,
  Count,
  IngredietsBox,
  IngredietsContainer,
  InputAmount,
  InputBox,
  ItemIngredient,
  ListIngredients,
  SelectAdd,
  SelectStyled,
  Title,
} from './RecipeIngredients.styled';

const RecipeIngredientsFields = ({ ingredients, setIngredients }) => {
  const [searchTerm] = useState('');
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [count, setCount] = useState(ingredients.length);

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

    // Filter ingredients
    const filteredIngredients = backendIngredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setIngredientOptions(filteredIngredients);
  }, [searchTerm]);

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: '' }]);
    setCount(count + 1);
  };

  const removeIngredientField = index => {
    if (ingredients.length > 1) {
      const updatedIngredients = [...ingredients];
      updatedIngredients.splice(index, 1);
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
    <>
      <Form>
        <IngredietsContainer>
          <IngredietsBox>
            <Title>Ingredients</Title>
            <BtnBox>
              <BtnCountMinus type="button" onClick={removeIngredientField}>
                -
              </BtnCountMinus>
              <Count>{count}</Count>
              <BtnCountPlus type="button" onClick={addIngredientField}>
                +
              </BtnCountPlus>
            </BtnBox>
          </IngredietsBox>
          <ListIngredients>
            {ingredients.map((ingredient, index) => (
              <ItemIngredient key={index}>
                <SelectStyled
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
                <InputBox>
                  <InputAmount
                    type="number"
                    value={ingredient.amount}
                    onChange={e =>
                      handleIngredientChange(index, 'amount', e.target.value)
                    }
                  />
                  <SelectAdd
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
                  </SelectAdd>
                </InputBox>
              </ItemIngredient>
            ))}
          </ListIngredients>
        </IngredietsContainer>
      </Form>
    </>
  );
};

export default RecipeIngredientsFields;
