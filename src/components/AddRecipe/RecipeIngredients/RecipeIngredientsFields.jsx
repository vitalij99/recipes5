import { useState, useEffect } from 'react';
import { BtnDeleteIcon } from './BtnDeleteIcon';
import Api from './Api';

import {
  Form,
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
  BtnDelete,
} from './RecipeIngredients.styled';

const RecipeIngredientsFields = ({ ingredients, setIngredients }) => {
  const [searchTerm] = useState('');
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [count, setCount] = useState(ingredients.length);
  const [backendIngredients, setBackendIngredients] = useState([]);

  const handleIngredientChange = (index, field, value) => {
    if (field === 'amount') {
      value = Math.max(0, value);
    }

    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleSelectIngredient = (index, selectedOption) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = selectedOption.value;
    setIngredients(updatedIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: '', amount: '', measure: '' }]);
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
    const filteredIngredients = backendIngredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setIngredientOptions(filteredIngredients);
  }, [searchTerm, backendIngredients]);

  useEffect(() => {
    setCount(ingredients.length);
  }, [ingredients]);

  useEffect(() => {
    if (ingredients.length === 0) {
      setIngredients([{ id: '', name: '', amount: '',  measure: '' }]);
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
                  maxMenuHeight={240}
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
                    value={ingredient.measure}
                    onChange={e =>
                      handleIngredientChange(index, 'measure', e.target.value)
                    }
                  >
                    <option value="tbs">tbs</option>
                    <option value="tsp">tsp</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                  </SelectAdd>
                </InputBox>
                <BtnDelete
                  type="button"
                  onClick={() => removeIngredientField(index)}
                >
                  <BtnDeleteIcon />
                </BtnDelete>
              </ItemIngredient>
            ))}
          </ListIngredients>
        </IngredietsContainer>
      </Form>
      <Api setBackendIngredients={setBackendIngredients} />
    </>
  );
};

export default RecipeIngredientsFields;
