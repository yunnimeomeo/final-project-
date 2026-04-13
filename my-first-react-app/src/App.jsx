import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import RecipeOne from "./pages/RecipeOne";

function App() {
  return (
    
    <BrowserRouter basename="/my-first-react-app/">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/recipeOne">RecipeOne</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipeOne" element={<RecipeOne />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
