import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { CSSTransition } from 'react-transition-group';

import recipesService from '../../services/get-recipes';

import RecipeCard from './RecipeCard';
import Pagination from './Pagination';
import FiltersList from './FiltersList';

import useWindowDimensions from './useWindowDimensions';

import './search-results.css';

const SearchResults = () => {
  // Recipe filters
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isCuisineSelected, setIsCuisineSelected] = useState(true);
  const [isIngredientSelected, setIsIngredientSelected] = useState(true);

  const [categoriesList, setCategoriesList] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);

  // Recipe data
  const [isRecipeDataLoading, setIsRecipeDataLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [numberOfRecipes, setNumberOfRecipes] = useState(0);

  // Hamburger Menu
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Screen size
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(16);
  const { width } = useWindowDimensions();

  // Search input
  const [recipeSearchInput, setRecipeSearchInput] = useState('');
  const [noRecipesFound, setNoRecipesFound] = useState(false);

  // Render category list and recipe cards on initial render
  useEffect(() => {
    getCategoriesList();
    getInitialRecipes();
  }, []);

  // Get and render category list data on user click
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

  // Close hamburger menu
  // Get category item data
  // Find number of recipes found
  const handleCategoryItemClick = async (e) => {
    if (
      e.target.parentElement.parentElement.parentElement.firstChild.classList.contains(
        'mobile-filter-header'
      )
    ) {
      setMobileFilterOpen((prev) => !prev);
    }

    setIsRecipeDataLoading((prev) => !prev);

    const filterCategoryRecipeData =
      await recipesService.getFilterItemRecipeService(
        'c',
        e.target.textContent
      );

    setNoRecipesFound(false);
    setRecipeData(filterCategoryRecipeData);
    setIsRecipeDataLoading((prev) => !prev);
    setNumberOfRecipes(Object.keys(filterCategoryRecipeData).length);
  };

  // Get and render cuisine list data on user click
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

  // Close hamburger menu
  // Get cuisine item data
  // Find number of recipes found
  const handleCuisineItemClick = async (e) => {
    if (
      e.target.parentElement.parentElement.parentElement.firstChild.classList.contains(
        'mobile-filter-header'
      )
    ) {
      setMobileFilterOpen((prev) => !prev);
    }

    setIsRecipeDataLoading((prev) => !prev);

    const filterCuisineRecipeData =
      await recipesService.getFilterItemRecipeService(
        'a',
        e.target.textContent
      );

    setNoRecipesFound(false);
    setRecipeData(filterCuisineRecipeData);
    setIsRecipeDataLoading((prev) => !prev);
    setNumberOfRecipes(Object.keys(filterCuisineRecipeData).length);
  };

  // Get and render ingredient list data on user click
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

  // Close hamburger menu
  // Get ingredient item data
  // Find number of recipes found
  const handleIngredientItemClick = async (e) => {
    if (
      e.target.parentElement.parentElement.parentElement.firstChild.classList.contains(
        'mobile-filter-header'
      )
    ) {
      setMobileFilterOpen((prev) => !prev);
    }

    setIsRecipeDataLoading((prev) => !prev);

    const filterIngredientRecipeData =
      await recipesService.getFilterItemRecipeService(
        'i',
        e.target.textContent
      );

    setNoRecipesFound(false);
    setRecipeData(filterIngredientRecipeData);
    setIsRecipeDataLoading((prev) => !prev);
    setNumberOfRecipes(Object.keys(filterIngredientRecipeData).length);
  };

  // Open and close hamburger menu
  const handleMobileFilterClick = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  const handleOnLoadRecipeCardImage = () => {
    setIsRecipeDataLoading(false);
  };

  // Get current recipe card
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = recipeData.slice(indexOfFirstCard, indexOfLastCard);

  // Change number of recipe cards shown based on user screen size
  useEffect(() => {
    setCurrentPage(1);
    if (width <= 1024) {
      setCardsPerPage(12);
    } else {
      setCardsPerPage(16);
    }
  }, [recipeData, width]);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // get recipe data to be shown on initial render
  // Find number of recipes found
  const getInitialRecipes = async () => {
    setIsRecipeDataLoading((prev) => !prev);
    const InitialRecipeData = await recipesService.getRecipeSearchService('');

    setRecipeData(InitialRecipeData);
    setIsRecipeDataLoading((prev) => !prev);
    setNumberOfRecipes(Object.keys(InitialRecipeData).length);
  };

  // Store user input in a state
  const handleRecipeSearchInputChange = (e) => {
    setRecipeSearchInput(e.target.value);
  };

  // Get recipe data for user input
  const handleOnSubmitSearchInput = async (e) => {
    e.preventDefault();
    setIsRecipeDataLoading((prev) => !prev);

    const searchRecipeData = await recipesService.getRecipeSearchService(
      recipeSearchInput
    );

    if (searchRecipeData === null) {
      setNoRecipesFound(true);
      setNumberOfRecipes(0);
    } else {
      setRecipeData(searchRecipeData);
      setNumberOfRecipes(Object.keys(searchRecipeData).length);
    }

    setRecipeSearchInput('');
    setIsRecipeDataLoading((prev) => !prev);
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
        <form
          className="recipe-search-form"
          onSubmit={handleOnSubmitSearchInput}
        >
          <div className="recipe-search-input-container">
            <input
              className="recipe-search-input"
              type="text"
              placeholder="Search for recipes..."
              value={recipeSearchInput}
              onChange={handleRecipeSearchInputChange}
            ></input>
            <span className="total-search-recipes">
              Showing {numberOfRecipes} Recipes
            </span>
          </div>
          <button type="submit" className="recipe-search-btn">
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
              Showing {Object.keys(recipeData).length} Recipes
            </p>
          </div>
        </div>
        <div className="recipes-results-container">
          {noRecipesFound ? (
            <h1 className="recipes-results-not-found-title">
              Sorry! No Recipes Found :(
            </h1>
          ) : isRecipeDataLoading ? (
            <div className="tail-spin-loader-container">
              <Loader type="TailSpin" />
            </div>
          ) : (
            currentCards.map((filterRecipe) => (
              <RecipeCard
                key={filterRecipe.idMeal}
                recipeCardData={filterRecipe}
                isRecipeDataLoading={isRecipeDataLoading}
                handleOnLoadRecipeCardImage={handleOnLoadRecipeCardImage}
              />
            ))
          )}
        </div>
        {noRecipesFound
          ? ''
          : !isRecipeDataLoading && (
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={recipeData.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
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
