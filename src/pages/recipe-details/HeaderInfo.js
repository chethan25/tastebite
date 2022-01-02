import Skeleton from '../../skeletons/Skeleton';

import './header-info.css';

const HeaderInfo = ({
  mealDetails,
  isMealDetailsLoading,
  handleOnLoadRecipeImage,
}) => {
  // Get meal tags
  let mealTags;
  if (mealDetails.strTags === null) {
    mealTags = null;
  } else if (typeof mealDetails.strTags !== 'undefined') {
    mealTags = mealDetails.strTags.split(',');
  }

  const imageStyle = isMealDetailsLoading ? { display: 'none' } : {};

  return (
    <section className="recipe-short-info-section">
      <div className="recipe-img-container">
        {isMealDetailsLoading && <Skeleton type="recipe-image" />}
        <img
          className="recipe-img"
          src={mealDetails.strMealThumb}
          alt="recipe"
          style={imageStyle}
          onLoad={handleOnLoadRecipeImage}
        ></img>
      </div>
      <div className="recipe-info-container">
        <div className="recipe-title-container">
          <h1 className="recipe-title">{mealDetails.strMeal}</h1>
        </div>
        <div className="recipe-description-container">
          <p className="recipe-description">
            Supermarket brands of ricotta contain stabilizers, which can give
            the cheese a gummy texture when baked. Check the label and choose
            ricotta made with as few ingredients as possible.
          </p>
        </div>
        <div className="recipe-type-container">
          <div className="recipe-category-container">
            <i class="far fa-folder fa-2x"></i>
            <h4 className="recipe-category-title">Category</h4>
            <p>{mealDetails.strCategory}</p>
          </div>
          <div className="recipe-cuisine-container">
            <i class="fas fa-globe-asia fa-2x"></i>
            <h4 className="recipe-cuisine-title">Cuisine</h4>
            <p>{mealDetails.strArea}</p>
          </div>
          <div className="recipe-serves-container">
            <i class="fa fa-users fa-2x"></i>
            <h4 className="recipe-serves-title">Servings</h4>
            <p>4 People</p>
          </div>
        </div>
        <hr />
        <div className="recipe-info-bottom-container">
          {!mealTags ? (
            <div className="no-tags">
              <p className="add-tag-text">Add Tags</p>
              <i class="fas fa-plus"></i>
            </div>
          ) : (
            <div className="recipe-tags-container">
              {mealTags.map((tag) => (
                <p className="recipe-tag-text">{tag}</p>
              ))}
            </div>
          )}
          <div className="recipe-icons-container">
            <i class="fas fa-plus fa-2x" title="Save Recipe"></i>
            <i class="fas fa-print fa-2x" title="Print Recipe"></i>
            <i class="fas fa-share fa-2x" title="Share Recipe"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderInfo;
