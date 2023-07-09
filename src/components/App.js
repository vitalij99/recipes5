import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authOperation';

const { WelcomePage } = lazy(() => import('page'));
const { CategoriesPage } = lazy(() => import('page'));
const { MainPage } = lazy(() => import('page'));
const { AddRecipePage } = lazy(() => import('page'));
const { FavoritePage } = lazy(() => import('page'));
const { RecipePage } = lazy(() => import('page'));
const { MyRecipesPage } = lazy(() => import('page'));
const { SearchPage } = lazy(() => import('page'));
const { ShoppingListPage } = lazy(() => import('page'));
const { AuthPage } = lazy(() => import('page'));

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
