// import Category from '../../components/category/Category';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import Slider from '../../components/slider/Slider';
import recipes from '../../data/recipesList';

export default function Favourites() {
  return (
    <>
      <Slider />
      <div className="page-title">Вибрані рецепти</div>
      <div className="recipes-container">
        {recipes
          .filter((recipe) => recipe.bookmark)
          .map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
    </>
  );
}
