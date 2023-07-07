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
} from 'page';

import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
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
    </>
  );
}

export default App;
