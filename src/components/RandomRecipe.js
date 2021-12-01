import './random-recipe.css';
import ChangeRecipeRightArrow from '../assets/icons/change-recipe-right-arrow.png';

const RandomRecipe = ({ randomRecipe, getRandomRecipe }) => {
  const recipeTitle = randomRecipe.strMeal;
  const recipeImage = randomRecipe.strMealThumb;

  return (
    <>
      <section id="random-recipe">
        <div className="random-recipe-container">
          <div className="random-recipe-img-container">
            <img className="random-recipe-img" src={recipeImage} alt="recipe" />
          </div>
          <div className="random-recipe-info-container">
            <div className="random-recipe-section-title">
              <h2>Recipe of the Day</h2>
            </div>
            <h3 className="random-recipe-title">{recipeTitle}</h3>
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
            <a className="view-recipe-link" href="/">
              <div className="view-recipe-container">
                <p className="view-recipe-text">View Recipe</p>
                <i class="fas fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RandomRecipe;
