import { useState, useEffect } from 'react';
import './styles.css';
import getRandomRecipeService from './services/get-recipes';
import Header from './components/Header';
import PopularCategories from './components/PopularCategories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import RandomRecipe from './components/RandomRecipe';

function App() {
  const [randomRecipe, setRandomRecipe] = useState({});

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = () => {
    getRandomRecipeService().then((randomRecipeData) =>
      setRandomRecipe(randomRecipeData)
    );
  };

  return (
    <>
      <Header />
      <PopularCategories />
      <RandomRecipe
        randomRecipe={randomRecipe}
        getRandomRecipe={getRandomRecipe}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
