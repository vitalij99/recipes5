import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { ownerRecipeReducer } from './recipe/recipeSlice';
import { mainReducer } from './main/mainSlice';
import { themeReducer } from './theme/themeSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { myRecipeReducer } from './myrecipes/myRecipeSlice';
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistConfigUserTheme = {
  key: 'userTheme',
  storage,
  whitelist: ['userTheme'],
};

const persistConfigRecipes = {
  key: 'recipes',
  storage,
  whitelist: ['shoppingList', 'favorite'],
};

export const store = configureStore({
  reducer: {
    theme: persistReducer(persistConfigUserTheme, themeReducer),
    auth: persistReducer(persistConfig, authReducer),
    recipes: persistReducer(persistConfigRecipes, ownerRecipeReducer),
    main: mainReducer,
    categories: categoriesReducer,
    myrecipes:myRecipeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
