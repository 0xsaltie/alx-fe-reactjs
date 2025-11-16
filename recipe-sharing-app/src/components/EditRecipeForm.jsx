import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';


const EditRecipeForm = () => {
const { id } = useParams();
const navigate = useNavigate();


const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));
const updateRecipe = useRecipeStore((state) => state.updateRecipe);


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


useEffect(() => {
if (recipe) {
setTitle(recipe.title);
setDescription(recipe.description);
}
}, [recipe]);


if (!recipe) return <p>Recipe not found.</p>;


const handleSubmit = (e) => {
e.preventDefault();
updateRecipe({ id, title, description });
navigate(`/recipes/${id}`);
};


return (
<form onSubmit={handleSubmit}>
<h2>Edit Recipe</h2>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>


<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
required
/>


<button type="submit">Save</button>
</form>
);
};


export default EditRecipeForm;