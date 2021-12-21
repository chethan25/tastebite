import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './search-results.css';
import recipesService from '../../services/get-recipes';
import FiltersList from './FiltersList';

const SearchResults = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(true);
  const [isCuisineSelected, setIsCuisineSelected] = useState(true);
  const [isIngredientSelected, setIsIngredientSelected] = useState(true);

  const [categoriesList, setCategoriesList] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsCategorySelected((prev) => !prev);
    setIsCuisineSelected(true);
    setIsIngredientSelected(true);

    if (isCategorySelected) {
      getCategoriesList();
    }
  };

  const getCategoriesList = async () => {
    const categoriesListData = await recipesService.getFilterListService('c');
    setCategoriesList(categoriesListData);
  };

  const handleCuisineClick = () => {
    setIsCuisineSelected((prev) => !prev);
    setIsCategorySelected(true);
    setIsIngredientSelected(true);

    if (isCuisineSelected) {
      getCuisineList();
    }
  };

  const getCuisineList = async () => {
    const cuisineListData = await recipesService.getFilterListService('a');
    setCuisineList(cuisineListData);
  };

  const handleIngredientClick = () => {
    setIsIngredientSelected((prev) => !prev);
    setIsCategorySelected(true);
    setIsCuisineSelected(true);

    if (isIngredientSelected) {
      getIngredientList();
    }
  };

  const getIngredientList = async () => {
    const ingredientListData = await recipesService.getFilterListService('i');
    setIngredientList(ingredientListData);
  };

  const handleMobileFilterClick = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  return (
    <section id="search-results-section">
      <div className="search-results-left-container">
        <div className="filter-container">
          <h2 className="filter-container-title">Filter By</h2>
          <FiltersList
            isCategorySelected={isCategorySelected}
            handleCategoryClick={handleCategoryClick}
            categoriesList={categoriesList}
            isCuisineSelected={isCuisineSelected}
            handleCuisineClick={handleCuisineClick}
            cuisineList={cuisineList}
            isIngredientSelected={isIngredientSelected}
            handleIngredientClick={handleIngredientClick}
            ingredientList={ingredientList}
          />
        </div>
      </div>
      <div className="search-results-right-container">
        <form className="recipe-search-form">
          <div className="recipe-search-input-container">
            <input
              type="text"
              placeholder="Search for recipes..."
              className="recipe-search-input"
            ></input>
            <span className="total-search-recipes">Showing 23 Recipes</span>
          </div>
          <button type="button" className="recipe-search-btn">
            Search
          </button>
        </form>
        <div className="mobile-filter-total-recipes-container">
          <div
            className="mobile-filter-container"
            onClick={handleMobileFilterClick}
          >
            <i class="fas fa-filter"></i>
            <p className="mobile-filter-text">Filters</p>
          </div>
          <div className="mobile-total-recipes">
            <p className="mobile-total-recipes-text">Showing 23 Recipes</p>
          </div>
        </div>
        <div className="recipes-results-container">
          {/* <h2>Recipes</h2> */}
        </div>
      </div>
      <CSSTransition
        in={mobileFilterOpen}
        unmountOnExit
        timeout={800}
        classNames="mobile-filter"
      >
        <FiltersList
          isCategorySelected={isCategorySelected}
          handleCategoryClick={handleCategoryClick}
          categoriesList={categoriesList}
          isCuisineSelected={isCuisineSelected}
          handleCuisineClick={handleCuisineClick}
          cuisineList={cuisineList}
          isIngredientSelected={isIngredientSelected}
          handleIngredientClick={handleIngredientClick}
          ingredientList={ingredientList}
          mobileFilter={true}
          handleMobileFilterClick={handleMobileFilterClick}
        />
      </CSSTransition>
    </section>
  );
};

export default SearchResults;
