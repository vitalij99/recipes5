// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const PopularRecipe = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchPopularRecipes = async () => {
//       try {
//         const response = await backendAPI.get('/popular-recipes');
//         const popularRecipes = response.data;

//         setRecipes(popularRecipes);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchPopularRecipes();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>No popular recipes available at the moment.</div>;
//   }

//   return (
//     <div>
//       <h2>Popular Recipes</h2>
//       {recipes.map(recipe => (
//         <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
//           {recipe.title}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default PopularRecipe;
