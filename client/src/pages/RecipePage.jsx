import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../services/recipeService";
import Loader from "../components/Loader";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(true);
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

  const ingredients = [];
  if (recipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push({ ingredient, measure });
      } else {
        break;
      }
    }
  }

  if (loading) {
    return <Loader />;
  }

  if (!recipe) {
    return (
      <div className="text-center text-xl mt-20 text-gray-500">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {recipe.strMeal}
      </h1>

      <div className="flex flex-wrap gap-8 mb-8">
        <div className="flex-1 min-w-50">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full rounded-xl shadow-md"
          />
        </div>

        <div className="flex-1 min-w-50">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 pb-2 text-gray-700">
            Ingredients
          </h2>

          <ul className="space-y-2">
            {ingredients.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 border-l-4 border-yellow-500 px-4 py-2 rounded-r-md"
              >
                <span className="font-semibold">{item.ingredient}</span>{" "}
                {item.measure}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 pb-2 text-gray-700">
          Instructions
        </h2>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          {recipe.strInstructions
            .split("\n")
            .map((line, index) => line.trim() && <p key={index}>{line}</p>)}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
