import { useState } from "react";
import SearchBar from "../components/searchBar";
import { searchRecipes } from "../services/recipeService";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    console.log(`Searching for recipes with query: ${query}`);
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  console.log("Current recipes in state:", recipes);

  return (
    <div>
      <h1>Recipe Home Page</h1>
      <p>Search for your favorite recipes here!</p>

      <SearchBar onSearch={handleSearch} />
      {}
    </div>
  );
};

export default HomePage;
