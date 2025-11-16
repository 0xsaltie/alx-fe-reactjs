import { useState } from 'react';
import useRecipeStore from '../store/recipeStore';


const AddRecipeForm = () => {
const addRecipe = useRecipeStore((state) => state.addRecipe);


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
const newRecipe = { id: Date.now().toString(), title, description };
addRecipe(newRecipe);
setTitle('');
setDescription('');
};


return (
<form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Recipe Title"
required
/>


<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Description"
required
/>


<button type="submit">Add Recipe</button>
</form>
);
};


export default AddRecipeForm;

