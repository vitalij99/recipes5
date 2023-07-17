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
import { shoppingListReducer } from './shopping/shoppingListSlice';

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
  whitelist: ['favorite', 'shoppingList'],
};

// const persistConfigShoppingList = {
//   key: 'shopping',
//   storage,
//   whitelist: ['shoppingList'],
// };

export const store = configureStore({
  reducer: {
    theme: persistReducer(persistConfigUserTheme, themeReducer),
    auth: persistReducer(persistConfig, authReducer),
    recipes: persistReducer(persistConfigRecipes, ownerRecipeReducer),
    shopping: shoppingListReducer,

    main: mainReducer,
    categories: categoriesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
