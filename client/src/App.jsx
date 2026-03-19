import React, { useEffect } from "react";
import { searchRecipes } from "./services/recipeService";

const App = () => {
  useEffect(() => {
    const fetchInitialRecipes = async () => {
      console.log("Fetching initial data...");

      const recipes = await searchRecipes("pasta");
      console.log("Fetched recipes:", recipes);
    };

    fetchInitialRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Finder</h1>
    </div>
  );
};

export default App;
