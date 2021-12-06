const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

const getRandomRecipeService = async () => {
  try {
    const response = await fetch(`${baseUrl}/random.php`);
    const data = await response.json();

    return data.meals[0];
  } catch (error) {
    console.log(error);
  }
};

export default getRandomRecipeService;
