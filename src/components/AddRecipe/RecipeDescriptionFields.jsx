import React from 'react';
import Select from 'react-select';

const RecipeDescriptionFields = ({ recipeData, handleInputChange }) => {
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleInputChange('photo', file);
  };

  const handleSelectChange = (event) => {
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
    <div>
      <div>
        <label htmlFor="photo"></label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handleFileInputChange}
        />
      </div>
      {recipeData.photo && (
        <div>
          <img src={URL.createObjectURL(recipeData.photo)} alt="Recipe" width={200} height={200}/>
        </div>
      )}
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipeData.name}
          onChange={handleSelectChange}
          placeholder="Enter item title"
        />
      </div>
      <div>
        <label htmlFor="description"></label>
        <textarea
          id="description"
          name="description"
          value={recipeData.description}
          onChange={handleSelectChange}
          placeholder="Enter about recipe"
        ></textarea>
      </div>
      <div>
  <label htmlFor="category"></label>
  <Select
    id="category"
    name="category"
    options={categoryOptions}
    value={categoryOptions.find((option) => option.value === recipeData.category)}
    onChange={(selectedOption) => handleInputChange('category', selectedOption.value)}
    placeholder="Category"
  />
</div>
<div>
  <label htmlFor="cookingTime"></label>
  <Select
    id="cookingTime"
    name="cookingTime"
    options={cookingTimeOptions}
    value={cookingTimeOptions.find((option) => option.value === recipeData.cookingTime)}
    onChange={(selectedOption) => handleInputChange('cookingTime', selectedOption.value)}
    placeholder="Cooking time"
  />
</div>
    </div>
  );
};

export default RecipeDescriptionFields;