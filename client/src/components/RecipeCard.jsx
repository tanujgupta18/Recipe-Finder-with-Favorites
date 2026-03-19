import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;

  return (
    <Link to={`/recipe/${idMeal}`} className="block no-underline text-inherit">
      <div className="border border-gray-200 rounded-xl bg-white shadow-md flex flex-col overflow-hidden transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-50 object-cover"
        />

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{strMeal}</h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
