import { useState, useEffect } from 'react';
import './styles.css';
import recipesService from './services/get-recipes';
import Header from './components/Header';
import PopularCategories from './components/PopularCategories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import RandomRecipe from './components/RandomRecipe';

function App() {
  const [isRandomRecipeLoading, setIsRandomRecipeLoading] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState({});

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    setIsRandomRecipeLoading(true);
    const randomRecipeData = await recipesService.getRandomRecipeService();
    setRandomRecipe(randomRecipeData);
  };

  const handleOnLoadRandomRecipeImage = () => {
    setIsRandomRecipeLoading(false);
  };

  return (
    <>
      <Header />
      <PopularCategories />
      <RandomRecipe
        isRandomRecipeLoading={isRandomRecipeLoading}
        handleOnLoadRandomRecipeImage={handleOnLoadRandomRecipeImage}
        randomRecipe={randomRecipe}
        getRandomRecipe={getRandomRecipe}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
