import axios from "axios";

const API_URL = import.meta.env.VITE_RECIPE_API_URL;

export const recipeApi = axios.create({
  baseURL: API_URL,
});

export const searchRecipes = async (query) => {
  try {
    const res = await recipeApi.get(`/search.php?s=${query}`);
    return res.data.meals || [];
  } catch (error) {
    console.log("Error fetching recipes: ", error);
    return [];
  }
};
