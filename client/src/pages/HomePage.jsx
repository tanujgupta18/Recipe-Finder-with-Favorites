import { useState } from "react";
import SearchBar from "../components/searchBar";
import { searchRecipes } from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {
    console.log(`Searching for recipes with query: ${query}`);
    const results = await searchRecipes(query);
    setRecipes(results);
    setSearched(true);
  };

  console.log("Current recipes in state:", recipes);

  return (
    <div className="max-w-6xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Recipe Home Page</h1>
      <p className="text-gray-600 mb-6">
        Search for your favorite recipes here!
      </p>

      <SearchBar onSearch={handleSearch} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>

      {searched && recipes.length === 0 && (
        <p className="mt-8 text-lg text-gray-500">
          No recipes found. Try searching something else 🍜
        </p>
      )}
    </div>
  );
};

export default HomePage;
