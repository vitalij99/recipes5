export const selectIngredients = state => state.recipes.ingradients;

export const selectShoppingList = state => state.recipes.shoppingList;

export const selectFavoriteList = state => state.recipes.favorite;

export const getIsLoading = state => state.recipes.isLoading;
