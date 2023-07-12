// import React from 'react';
// import AddRecipeForm from 'components/AddRecipe/AddRecipeForm';
// import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

// const AddRecipePage = () => {
//   return (
//     <div>
//       <MainPageTitle title={'Add recipe'} />
//       <AddRecipeForm />
//     </div>
//   );
// };

// export default AddRecipePage;

import React, { useState } from 'react';
import AddRecipeForm from 'components/AddRecipe/AddRecipeForm';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import Loader from 'components/Loader/Loader';

const AddRecipePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <MainPageTitle title={'Add recipe'} />
      {isLoading ? <Loader /> : <AddRecipeForm />}
    </div>
  );
};

export default AddRecipePage;
