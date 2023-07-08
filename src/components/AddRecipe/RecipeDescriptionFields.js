import React from 'react';

const RecipeDescriptionFields = ({ recipeData, handleInputChange }) => {
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleInputChange('photo', file);
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };
// для проверки статические данные
  const categoryOptions = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];

  const cookingTimeOptions = [];
  for (let i = 5; i <= 120; i += 5) {
    cookingTimeOptions.push({ id: i, name: `${i} min` });
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
        <select
          id="category"
          name="category"
          value={recipeData.category}
          onChange={handleSelectChange}
         
        >
          <option value="">Category</option>
          {categoryOptions.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cookingTime"></label>
        <select
          id="cookingTime"
          name="cookingTime"
          value={recipeData.cookingTime}
          onChange={handleSelectChange}
          
        >
          <option value="">Cooking time</option>
          {cookingTimeOptions.map((timeOption) => (
            <option key={timeOption.id} value={timeOption.id}>
              {timeOption.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RecipeDescriptionFields;
