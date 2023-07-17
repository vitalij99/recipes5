import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authOperation';
import { WelcomePage, AuthPage } from 'page';
import { PrivateRoute } from 'route/PrivateRoute';
import RestrictedRoute from 'route/RestrictedRoute';

const CategoriesPage = lazy(() => import('page/CategoriesPage/CategoriesPage'));
const MainPage = lazy(() => import('page/MainPage/MainPage'));
const AddRecipePage = lazy(() => import('page/AddRecipePage/AddRecipePage'));
const FavoritePage = lazy(() => import('page/FavoritePage/FavoritePage'));
const RecipePage = lazy(() => import('page/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() => import('page/MyRecipesPage/MyRecipesPage'));
const SearchPage = lazy(() => import('page/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('page/ShoppingListPage/ShoppingListPage')
);
const NotFoundPage = lazy(() => import('page/NotFoundPage/NotFoundPage'));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    handleRouteChange();
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route
          index
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/auth/:id"
          element={<RestrictedRoute component={<AuthPage />} />}
        />

        <Route path="/" element={<PrivateRoute component={<SharedLayout />} />}>
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
          <Route path="/main" element={<MainPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
