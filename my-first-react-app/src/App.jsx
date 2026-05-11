import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import RecipeOne from "./pages/RecipeOne";
import RecipesAll from "./pages/RecipesAll";

function Menu() {
  const navigate = useNavigate();

  return (
    <select onChange={(e) => navigate(e.target.value)}>
      <option value="/">Pages</option>
      <option value="/">Home</option>
      <option value="/about">About</option>
      <option value="/profile">Profile</option>
      <option value="/recipeone">Recipe One</option>
      <option value="/recipesall">Recipes All</option>
    </select>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipeone" element={<RecipeOne />} />
        <Route path="/recipesall" element={<RecipesAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;