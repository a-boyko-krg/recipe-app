import Category from '../../components/category/Category';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import Slider from '../../components/slider/Slider';
import recipes from '../../data/recipesList.js';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../App';


export default function Recipes() {
  const {searchValue} = useContext(SearchContext)
  let params = useParams();
   return (
    <>
      <Slider />
      <Category />

      
      <div className="recipes-container">
        {params.cat !== 'Всі' ? (
          <>
            {recipes
              .filter((recipe) =>  recipe.category === params.cat)
              .map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
          </>
        ) : (
          <>{recipes
    .filter((recipe) => {
      if (recipe.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((recipe, index) => <RecipeCard key={index} recipe={recipe} />
    )}
    </>
        )}
      </div>
    </>
  );
}
