import { Link } from 'react-router-dom';

import Skeleton from '../../skeletons/Skeleton';
import ChangeRecipeRightArrow from '../../assets/icons/change-recipe-right-arrow.png';

import './random-recipe.css';

const RandomRecipe = ({
  isRandomRecipeLoading,
  handleOnLoadRandomRecipeImage,
  randomRecipe,
  getRandomRecipe,
}) => {
  const recipeTitle = randomRecipe.strMeal;
  const recipeImage = randomRecipe.strMealThumb;
  const imageStyle = isRandomRecipeLoading ? { display: 'none' } : {};

  return (
    <>
      <section id="random-recipe">
        <div className="random-recipe-container">
          <div className="random-recipe-img-container">
            {isRandomRecipeLoading && <Skeleton type="thumbnail" />}
            <img
              className="random-recipe-img"
              src={recipeImage}
              alt="recipe"
              style={imageStyle}
              onLoad={handleOnLoadRandomRecipeImage}
            />
          </div>
          <div className="random-recipe-info-container">
            <div className="random-recipe-section-title">
              <h2>Recipe of the Day</h2>
            </div>
            {isRandomRecipeLoading ? (
              <Skeleton type="title" />
            ) : (
              <h3 className="random-recipe-title">{recipeTitle}</h3>
            )}
            <p className="random-recipe-tag">
              Learn how to make today's top rated recipe
            </p>
            <div onClick={getRandomRecipe} className="change-random-recipe">
              <img
                className="change-random-recipe-icon"
                src={ChangeRecipeRightArrow}
                alt="change-random-recipe"
              ></img>
            </div>
            <Link
              to={`/recipe-details/${randomRecipe.idMeal}`}
              className="view-recipe-link"
            >
              <div className="view-recipe-container">
                <p className="view-recipe-text">View Recipe</p>
                <i class="fas fa-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RandomRecipe;
