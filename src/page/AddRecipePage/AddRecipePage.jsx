import React from 'react';
import AddRecipeForm from 'components/AddRecipe/AddRecipeForm';

const AddRecipePage = () => {
  return (
    <div>
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
