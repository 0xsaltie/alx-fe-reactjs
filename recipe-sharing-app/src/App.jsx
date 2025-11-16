import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";



function App() {
return (
<BrowserRouter>
<div style={{ padding: '2rem' }}>
<h1>Recipe Sharing App</h1>


<Routes>
<Route
path="/"
element={(
<div>
<AddRecipeForm />
<RecipeList />
<SearchBar />
<RecommendationsList />
<FavoritesList />
</div>


)}
/>


<Route path="/recipes/:id" element={<RecipeDetails />} />
<Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
</Routes>
</div>
</BrowserRouter>
);
}


export default App;

