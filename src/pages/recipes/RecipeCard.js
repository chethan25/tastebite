import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './recipe-card.css';

const RecipeCard = ({
  recipeCardData,
  isFilterRecipeDataLoading,
  handleOnLoadRecipeCardImage,
}) => {
  // Get random recipe rating from 1 - 5
  const ratingNumber = useMemo(
    () => Math.floor(Math.random() * (5 - 1 + 1) + 1),
    []
  );
  const ratingNumberArray = [...Array(ratingNumber).keys()];
  const cookingTimeArray = ['20', '10', '30', '45', '60', '120'];

  const imageStyle = isFilterRecipeDataLoading ? { display: 'none' } : {};

  return (
    <Link to={`/recipe-details/${recipeCardData.idMeal}`}>
      <div className="recipe-card-container">
        <div className="recipe-card-img-container">
          <img
            className="recipe-card-img"
            src={recipeCardData.strMealThumb}
            alt="recipe"
            style={imageStyle}
            onLoad={handleOnLoadRecipeCardImage}
          />
          <div className="recipe-card-img-fav-container">
            <i class="fa fa-heart fa-lg" title="Add to Bookmark"></i>
          </div>
        </div>
        {!isFilterRecipeDataLoading && (
          <div className="recipe-card-info-container">
            <div className="recipe-card-title-container">
              <h3 className="recipe-card-title">{recipeCardData.strMeal}</h3>
            </div>
            <div className="recipe-card-info-bottom-container">
              <div className="recipe-card-rating-icon-container">
                {ratingNumberArray.map((r) => (
                  <i class="fas fa-star"></i>
                ))}
              </div>
              <div className="recipe-card-cooking-time-container">
                <i class="far fa-clock"></i>
                <div className="recipe-card-time-text">
                  {cookingTimeArray[ratingNumber]} mins
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
