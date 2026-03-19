import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../services/recipeService";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(false);
        const data = await getRecipeId(recipeId);
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (loading) {
    return <div>Loading recipe...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <p>Data has been fetched! We will display it in the next step.</p>
    </div>
  );
};

export default RecipePage;
