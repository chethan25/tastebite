import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import RecipeDetails from './pages/recipe-details/RecipeDetails';
import Recipes from './pages/recipes/Recipes';

import './styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipe-details/:mealId" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
