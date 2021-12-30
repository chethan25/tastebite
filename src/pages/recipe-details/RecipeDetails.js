import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import recipesService from '../../services/get-recipes';

import Header from '../recipes/Header';
import Details from './Details';

const RecipeDetails = () => {
  const { mealId } = useParams();

  const [mealDetails, setMealDetails] = useState([]);

  useEffect(() => {
    getRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRecipeDetails = async () => {
    const recipeDetailsData = await recipesService.getRecipeByIdService(mealId);
    setMealDetails(recipeDetailsData);
  };

  return (
    <div>
      <Header headerTitle="Recipe Details" />
      <Details mealDetails={mealDetails} />
    </div>
  );
};

export default RecipeDetails;
