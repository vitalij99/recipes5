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

// import React from 'react';
// import AddRecipeForm from 'components/AddRecipe/AddRecipeForm';
// import Error from 'components/Error/Error';

// const AddRecipePage = () => {
//   const showError = true;

//   return <div>{showError ? <Error /> : <AddRecipeForm />}</div>;
// };

// export default AddRecipePage;
