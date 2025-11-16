import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe)
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to recipes</Link>
      </div>
    );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: "1rem" }}>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: "1rem" }}>
          Edit
        </Link>

        <DeleteRecipeButton id={recipe.id} />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Link to="/">Back to recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
