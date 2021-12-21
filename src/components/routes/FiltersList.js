import './filters-list.css';

const FiltersList = ({
  isCategorySelected,
  handleCategoryClick,
  categoriesList,
  handleCategoryItemClick,
  isCuisineSelected,
  handleCuisineClick,
  cuisineList,
  handleCuisineItemClick,
  isIngredientSelected,
  handleIngredientClick,
  ingredientList,
  handleIngredientItemClick,
  mobileFilter,
  handleMobileFilterClick,
}) => {
  return (
    <sectioin id="mobile-filter-container">
      {mobileFilter && (
        <div className="mobile-filter-header">
          <h1>Filter By</h1>
          <div
            className="mobile-filter-header-close"
            onClick={() => handleMobileFilterClick()}
          >
            <i className="fas fa-times fa-2x"></i>
          </div>
        </div>
      )}
      <ul className="filter-types-list">
        <li
          className={
            'filter-types-list-item ' +
            (!isCategorySelected ? 'filter-active' : '')
          }
          onClick={handleCategoryClick}
        >
          Category
        </li>
        {!isCategorySelected && (
          <ul className="category-filter-list">
            {categoriesList.map((category, index) => (
              <li
                key={index}
                className="category-filter-list-item"
                onClick={handleCategoryItemClick}
              >
                {category.strCategory}
              </li>
            ))}
          </ul>
        )}
        <li
          className={
            'filter-types-list-item ' +
            (!isCuisineSelected ? 'filter-active' : '')
          }
          onClick={handleCuisineClick}
        >
          Cuisine
        </li>
        {!isCuisineSelected && (
          <ul className="cuisine-filter-list">
            {cuisineList.map((cuisine, index) => (
              <li
                key={index}
                className="cuisine-filter-list-item"
                onClick={handleCuisineItemClick}
              >
                {cuisine.strArea}
              </li>
            ))}
          </ul>
        )}
        <li
          className={
            'filter-types-list-item ' +
            (!isIngredientSelected ? 'filter-active' : '')
          }
          onClick={handleIngredientClick}
        >
          Ingredient
        </li>
        {!isIngredientSelected && (
          <ul className="ingredient-filter-list">
            {ingredientList.map((ingredient, index) => (
              <li
                key={index}
                className="ingredient-filter-list-item"
                onClick={handleIngredientItemClick}
              >
                {ingredient.strIngredient}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </sectioin>
  );
};

export default FiltersList;
