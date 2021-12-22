import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './search-results.css';
import Loader from 'react-loader-spinner';
import recipesService from '../../services/get-recipes';
import FiltersList from './FiltersList';
import RecipeCard from './RecipeCard';

const SearchResults = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isCuisineSelected, setIsCuisineSelected] = useState(true);
  const [isIngredientSelected, setIsIngredientSelected] = useState(true);

  const [categoriesList, setCategoriesList] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);

  const [isFilterRecipeDataLoading, setIsFilterRecipeDataLoading] =
    useState(false);
  const [filterRecipeData, setFilterRecipeData] = useState([]);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    getCategoriesList();
  }, []);

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

  const handleCategoryItemClick = async (e) => {
    if (
      e.target.parentElement.parentElement.parentElement.firstChild.classList.contains(
        'mobile-filter-header'
      )
    ) {
      setMobileFilterOpen((prev) => !prev);
    }
    setIsFilterRecipeDataLoading((prev) => !prev);

    const filterCategoryRecipeData =
      await recipesService.getFilterItemRecipeService(
        'c',
        e.target.textContent
      );
    setFilterRecipeData(filterCategoryRecipeData);

    setIsFilterRecipeDataLoading((prev) => !prev);
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

  const handleCuisineItemClick = async (e) => {
    if (
      e.target.parentElement.parentElement.parentElement.firstChild.classList.contains(
        'mobile-filter-header'
      )
    ) {
      setMobileFilterOpen((prev) => !prev);
    }
    setIsFilterRecipeDataLoading((prev) => !prev);

    const filterCuisineRecipeData =
      await recipesService.getFilterItemRecipeService(
        'a',
        e.target.textContent
      );
    setFilterRecipeData(filterCuisineRecipeData);

    setIsFilterRecipeDataLoading((prev) => !prev);
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

  const handleIngredientItemClick = async (e) => {
    if (
      e.target.parentElement.parentElement.parentElement.firstChild.classList.contains(
        'mobile-filter-header'
      )
    ) {
      setMobileFilterOpen((prev) => !prev);
    }
    setIsFilterRecipeDataLoading((prev) => !prev);

    const filterIngredientRecipeData =
      await recipesService.getFilterItemRecipeService(
        'i',
        e.target.textContent
      );
    setFilterRecipeData(filterIngredientRecipeData);

    setIsFilterRecipeDataLoading((prev) => !prev);
  };

  const handleMobileFilterClick = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  const handleOnLoadRecipeCardImage = () => {
    setIsFilterRecipeDataLoading(false);
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
            handleCategoryItemClick={handleCategoryItemClick}
            isCuisineSelected={isCuisineSelected}
            handleCuisineClick={handleCuisineClick}
            cuisineList={cuisineList}
            handleCuisineItemClick={handleCuisineItemClick}
            isIngredientSelected={isIngredientSelected}
            handleIngredientClick={handleIngredientClick}
            ingredientList={ingredientList}
            handleIngredientItemClick={handleIngredientItemClick}
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
            <span className="total-search-recipes">
              Showing {Object.keys(filterRecipeData).length} Recipes
            </span>
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
            <p className="mobile-total-recipes-text">
              Showing {Object.keys(filterRecipeData).length} Recipes
            </p>
          </div>
        </div>
        <div className="recipes-results-container">
          {isFilterRecipeDataLoading && (
            <div className="tail-spin-loader-container">
              <Loader type="TailSpin" />
            </div>
          )}
          {filterRecipeData.map((filterRecipe) => (
            <RecipeCard
              key={filterRecipe.idMeal}
              recipeCardData={filterRecipe}
              isFilterRecipeDataLoading={isFilterRecipeDataLoading}
              handleOnLoadRecipeCardImage={handleOnLoadRecipeCardImage}
            />
          ))}
        </div>
      </div>
      <CSSTransition
        in={mobileFilterOpen}
        unmountOnExit
        timeout={500}
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
          handleCategoryItemClick={handleCategoryItemClick}
          handleCuisineItemClick={handleCuisineItemClick}
          handleIngredientItemClick={handleIngredientItemClick}
        />
      </CSSTransition>
    </section>
  );
};

export default SearchResults;
