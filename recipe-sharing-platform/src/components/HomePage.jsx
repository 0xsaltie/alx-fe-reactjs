import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // Load mock JSON data
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>

      {/* Responsive grid of recipe cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}   // ✅ LINK TO DETAIL PAGE
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 cursor-pointer"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-md w-full h-40 object-cover mb-4"
            />

            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
