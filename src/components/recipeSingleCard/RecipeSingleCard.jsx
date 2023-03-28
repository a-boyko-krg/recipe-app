import { Avatar, Button, Tooltip } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { Link } from 'react-router-dom';


export default function RecipeSingleCard({ recipe }) {
 
  return (
    <div className="singleRecipeWrapper">
      <div className="info-wrapper">
        <div className="recipe-info">
          <Avatar className="author-avatar" src={recipe.author.img} alt="" />
          <p className="author">автор: {recipe.author.name}</p>
        </div>
        <Tooltip title="Повернутись до всіх рецептів">
          <Link to="/recipes/Всі" className="single-recipe-btn">
            <Button color="primary" aria-label="add">
              <ReplayIcon />
            </Button>
          </Link>
        </Tooltip>
      </div>
      <h1 className="recipe-title">{recipe.title}</h1>
      <div className="singlePostContentUp">
        <img className="singlePostImg" src={recipe.img} alt="" />

        <div className="singlePostContentText">
          <p className="singlePostDesc">{recipe.desc}</p>
          <div className="singlePostIngredients">
            <h3 className="singlePostDownTitle">Інгредієнти</h3>
            <ul className="singlePostIngredients">
              {recipe.products.split(';').map((ingredients) => (
                <li className="singlePostListItem" key={ingredients}>
                  {ingredients}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h3 className="singlePostDownTitle methodTitle">Спосіб приготування</h3>

      <ol className="singlePostMethod">
        {recipe.method.split(';').map((method) => (
          <li className="singlePostListItem methodItem" key={method}>
            {method}
          </li>
        ))}
      </ol>
    </div>
  );
}
