import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../../data/recipesList.js';
import RecipeSingleCard from '../../components/recipeSingleCard/RecipeSingleCard.jsx';

function SingleRecipe() {
  let params = useParams();
  return (
    <div className="singleRecipe">
      {recipes
        .filter((recipe) => recipe.id === +params.id)
        .map((recipe, index) => (
          <RecipeSingleCard key={index} recipe={recipe} />
        ))}
    </div>
  );
}

export default SingleRecipe;

