import React, { useState } from 'react';
import { AddPhotoIcon } from './AddPhotoIcon';
import Api from './Api';

import {
  AddPhotoContainer,
  BoxIcon,
  DescriptionBox,
  Form,
  InputForm,
  InputPhoto,
  LabelForm,
  LabelSelect,
  StyledSelect,
} from './RecipeDescription.styled';

const RecipeDescriptionFields = ({ recipeData, handleInputChange }) => {
  const [categories, setCategories] = useState([]);

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    handleInputChange('photo', file);
  };

  const handleSelectChange = event => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };

  const categoryOptions = categories.map(category => ({
    value: category,
    label: category,
  }));

  const cookingTimeOptions = [];
  for (let i = 5; i <= 120; i += 5) {
    cookingTimeOptions.push({ value: i, label: `${i} min` });
  }

  return (
    <DescriptionBox>
      <AddPhotoContainer>
        <label htmlFor="photo">
          {recipeData.photo ? (
            <img src={URL.createObjectURL(recipeData.photo)} alt="Recipe" />
          ) : (
            <BoxIcon>
              <AddPhotoIcon />
            </BoxIcon>
          )}
          <InputPhoto
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleFileInputChange}
          />
        </label>
      </AddPhotoContainer>
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
          Category
          <StyledSelect
            id="category"
            name="category"
            options={categoryOptions}
            value={categoryOptions.find(
              option => option.value === recipeData.category
            )}
            maxMenuHeight={220}
            onChange={selectedOption =>
              handleInputChange('category', selectedOption.value)
            }
          />
        </LabelSelect>
        <LabelSelect htmlFor="cookingTime">
          Cooking time
          <StyledSelect
            id="cookingTime"
            name="cookingTime"
            options={cookingTimeOptions}
            value={cookingTimeOptions.find(
              option => option.value === recipeData.cookingTime
            )}
            maxMenuHeight={220}
            onChange={selectedOption =>
              handleInputChange('cookingTime', selectedOption.value)
            }
          />
        </LabelSelect>
      </Form>
      <Api setCategories={setCategories} />
    </DescriptionBox>
  );
};

export default RecipeDescriptionFields;
