import { createSlice } from '@reduxjs/toolkit';
import { fetchIngradients } from './recipeOperetion';

const initialState = {
  shoppingList: [],
  ingradients: [],
  favorite: [],
  isLoading: false,
  error: null,
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
    addRecipeToFavorite: {
      reducer: (state, { payload }) => {
        state.favorite.push(payload);
      },
    },
    removeRecipeFromFavorit: {
      reducer: (state, { payload }) => {
        const index = state.favorite.findIndex(vel => vel.id === payload.id);
        state.favorite.splice(index, 1);
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
      });
    // .addCase(addShoppingList.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(addShoppingList.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.ingradients = action.payload;
    // })
    // .addCase(addShoppingList.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const ownerRecipeReducer = ownerRecipeSlice.reducer;
export const {
  removeRecipeFromFavorit,
  addShoppingList,
  removeShoppingList,
  addRecipeToFavorite,
} = ownerRecipeSlice.actions;
