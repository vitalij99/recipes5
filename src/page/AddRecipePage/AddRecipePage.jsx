import React from 'react';
import AddRecipeForm from 'components/AddRecipe/AddRecipeForm';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

const AddRecipePage = () => {
  return (
    <div>
      <MainPageTitle title={'Add recipe'} />
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;
