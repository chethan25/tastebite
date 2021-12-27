// Request https://www.themealdb.com/api.php for all recipe data

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

// Get random recipe data
const getRandomRecipeService = async () => {
  try {
    const response = await fetch(`${baseUrl}/random.php`);
    const data = await response.json();

    return data.meals[0];
  } catch (error) {
    console.log(error);
  }
};

// Get different types of filters list
const getFilterListService = async (filterType) => {
  try {
    const response = await fetch(`${baseUrl}/list.php?${filterType}=list`);
    const data = await response.json();

    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

// Get filter type recipes
const getFilterItemRecipeService = async (filterType, filterItem) => {
  try {
    const response = await fetch(
      `${baseUrl}/filter.php?${filterType}=${filterItem}`
    );
    const data = await response.json();

    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

// Get recipes based on user input
const getRecipeSearchService = async (searchInput) => {
  try {
    const response = await fetch(`${baseUrl}/search.php?s=${searchInput}`);
    const data = await response.json();

    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getRandomRecipeService,
  getFilterListService,
  getFilterItemRecipeService,
  getRecipeSearchService,
};
