import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Recipes from './pages/recipes/Recipes';

import './styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
