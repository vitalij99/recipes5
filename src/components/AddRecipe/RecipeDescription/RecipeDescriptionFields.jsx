import React from 'react';

import { AddFotoIcon } from './AddFotoIcon';
import {
  AddFotoContainer,
  BoxIcon,
  Form,
  InputForm,
  InputFoto,
  LabelForm,
  LabelSelect,
  StyledSelect,
} from './RecipeDescription.styled';

const RecipeDescriptionFields = ({ recipeData, handleInputChange }) => {
  const handleFileInputChange = event => {
    const file = event.target.files[0];
    handleInputChange('photo', file);
  };

  const handleSelectChange = event => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };

  const categoryOptions = [
    { value: 1, label: 'Category 1' },
    { value: 2, label: 'Category 2' },
    { value: 3, label: 'Category 3' },
    { value: 4, label: 'Category 4' },
    { value: 5, label: 'Category 5' },
    { value: 6, label: 'Category 6' },
    { value: 7, label: 'Category 7' },
    { value: 8, label: 'Category 8' },
    { value: 9, label: 'Category 9' },
  ];

  const cookingTimeOptions = [];
  for (let i = 5; i <= 120; i += 5) {
    cookingTimeOptions.push({ value: i, label: `${i} min` });
  }

  return (
    <>
      <AddFotoContainer>
        <label htmlFor="photo">
          {recipeData.photo ? (
            <img src={URL.createObjectURL(recipeData.photo)} alt="Recipe" />
          ) : (
            <BoxIcon>
              <AddFotoIcon />
            </BoxIcon>
          )}
          <InputFoto
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleFileInputChange}
          />
        </label>
      </AddFotoContainer>
      <Form>
        <LabelForm htmlFor="name">
          <InputForm
            type="text"
            id="name"
            name="name"
            value={recipeData.name}
            onChange={handleSelectChange}
            placeholder="Enter item title"
          />
        </LabelForm>
        <LabelForm htmlFor="description">
          <InputForm
            id="description"
            name="description"
            value={recipeData.description}
            onChange={handleSelectChange}
            placeholder="Enter about recipe"
          ></InputForm>
        </LabelForm>
        <LabelSelect htmlFor="category">
          {' '}
          Category
          <StyledSelect
            id="category"
            name="category"
            options={categoryOptions}
            value={categoryOptions.find(
              option => option.value === recipeData.category
            )}
            onChange={selectedOption =>
              handleInputChange('category', selectedOption.value)
            }
          />
        </LabelSelect>
        <LabelSelect htmlFor="cookingTime">
          {' '}
          Cooking time
          <StyledSelect
            id="cookingTime"
            name="cookingTime"
            options={cookingTimeOptions}
            value={cookingTimeOptions.find(
              option => option.value === recipeData.cookingTime
            )}
            onChange={selectedOption =>
              handleInputChange('cookingTime', selectedOption.value)
            }
          />
        </LabelSelect>
      </Form>
    </>
  );
};

export default RecipeDescriptionFields;
