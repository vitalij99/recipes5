import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipeToFavorite,
  addShoppingList,
  fetchIngradients,
  getFavoriteRecipes,
  removeRecipeToFavorite,
  // removeShoppingList,
} from './recipeOperetion';

const initialState = {
  shoppingList: [],
  ingradients: [],
  favorite: [],
  isLoading: false,
  error: null,
  operetion: null,
};
const ownerRecipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addShoppingList: {
      reducer: (state, { payload }) => {
        state.shoppingList.push(payload);
      },
    },
    removeShoppingList: {
      reducer: (state, { payload }) => {
        const index = state.shoppingList.findIndex(
          vel => vel.id === payload.id
        );
        state.shoppingList.splice(index, 1);
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIngradients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngradients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingradients = action.payload;
      })
      .addCase(fetchIngradients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addRecipeToFavorite.pending, state => {
        state.isLoading = true;
        state.operetion = 'addFavorite';
      })
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        console.log('add ', payload);
        const id = payload;
        state.isLoading = false;
        state.error = null;
        state.favorite.push({ id });
      })
      .addCase(addRecipeToFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.operetion = null;
        state.error = payload;
      })
      .addCase(removeRecipeToFavorite.pending, state => {
        state.operetion = 'removeFavorite';
        state.isLoading = true;
      })
      .addCase(removeRecipeToFavorite.fulfilled, (state, { payload }) => {
        const id = payload;
        state.operetion = null;
        state.isLoading = false;
        state.error = null;
        const index = state.favorite.findIndex(vel => vel.id === id);
        state.favorite.splice(index, 1);
      })
      .addCase(removeRecipeToFavorite.rejected, (state, { payload }) => {
        state.operetion = null;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getFavoriteRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload.map(item => ({ ...item, id: item._id }));
      })
      .addCase(getFavoriteRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addShoppingList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList.push(payload);
      })
      .addCase(addShoppingList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    // .addCase(removeShoppingList.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(removeShoppingList.fulfilled, (state, { payload }) => {
    //   console.log(payload);
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.shoppingList.findIndex(
    //     vel => vel.item === payload.item
    //   );
    //   state.shoppingList.splice(index, 1);
    // })
    // .addCase(removeShoppingList.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
  },
});

export const ownerRecipeReducer = ownerRecipeSlice.reducer;
export const {
  // addShoppingList,
  removeShoppingList,
} = ownerRecipeSlice.actions;
