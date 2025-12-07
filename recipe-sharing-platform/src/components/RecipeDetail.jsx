import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = data.find((item) => item.id === parseInt(id));
    setRecipe(selected);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/"
        className="text-blue-600 underline mb-4 inline-block hover:text-blue-800"
      >
        ← Back to Home
      </Link>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        {/* Ingredients */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
