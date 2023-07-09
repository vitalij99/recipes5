import {
  WelcomePage,
  CategoriesPage,
  MainPage,
  AddRecipePage,
  FavoritePage,
  RecipePage,
  MyRecipesPage,
  SearchPage,
  ShoppingListPage,
  AuthPage,
} from 'page';

import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authOperation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />

          <Route path="/" element={<SharedLayout />}>
            <Route path="/main" element={<MainPage />} />
            <Route
              path="/categories/:categoryName"
              element={<CategoriesPage />}
            />
            <Route path="/add" element={<AddRecipePage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
