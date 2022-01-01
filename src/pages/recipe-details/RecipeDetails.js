import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import recipesService from '../../services/get-recipes';

import Header from '../recipes/Header';
import Details from './Details';

const RecipeDetails = () => {
  // Get recipe id from URL
  const { mealId } = useParams();

  // Recipe Details Data
  const [isMealDetailsLoading, setIsMealDetailsLoading] = useState(false);
  const [mealDetails, setMealDetails] = useState([]);

  // Render recipe details on initial render
  useEffect(() => {
    getRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get recipe details and set it to state
  // Set load state to false after data is fetched
  const getRecipeDetails = async () => {
    setIsMealDetailsLoading(true);
    const recipeDetailsData = await recipesService.getRecipeByIdService(mealId);
    setMealDetails(recipeDetailsData);
    setIsMealDetailsLoading(false);
  };

  // Set state to false after image has loaded
  const handleOnLoadRecipeImage = () => {
    setIsMealDetailsLoading(false);
  };

  return (
    <div>
      <Header headerTitle="Recipe Details" />
      <Details
        mealDetails={mealDetails}
        isMealDetailsLoading={isMealDetailsLoading}
        handleOnLoadRecipeImage={handleOnLoadRecipeImage}
      />
    </div>
  );
};

export default RecipeDetails;
