import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Recipes from './pages/recipes/Recipes';
import Settings from './pages/settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleRecipe from './pages/singleRecipe/SingleRecipe';
import Favourites from './pages/favourites/Favorites';
import { createContext, useState } from 'react';

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <Router>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<SingleRecipe />} />
            <Route
              path="/recipes/:cat"
              element={<Recipes />}
            />
            <Route
              path="/recipes/favourites"
              element={<Favourites />}
            />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </SearchContext.Provider>
    </Router>
  );
}

export default App;
