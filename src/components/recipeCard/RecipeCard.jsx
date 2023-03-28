import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Tooltip,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageBlock from '../imageBlock/ImageBlock';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function RecipeCard({ recipe }) {
 const [like, setLike] = useState(recipe.like);
 const [isLiked, setIsLiked] = useState(false);

 const likeHandler = () => {
   setLike(isLiked ? like - 1 : like + 1);
   setIsLiked(!isLiked);
 };

  const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'var(--background-color)',
  }));

  return (
    <CustomCard className="recipe-card">
      <CardMedia>
        <Link to={`/recipe/${recipe.id}`}>
          <ImageBlock className="postImg" imgSrc={recipe.img} pt="65%" />
        </Link>
      </CardMedia>
      <div className="recipe-card-info">
        <Avatar className="author-img" src={recipe.author.img} alt="" />
        <div className="more-info">
          <span className="author">автор: {recipe.author.name}</span>
          <span className="category">{recipe.category}</span>
        </div>
        <Link to={`/recipe/${recipe.id}`}>
          <span className="recipe-title">{recipe.title}</span>
          <p className="recipe-desc">{recipe.desc}</p>
        </Link>
      </div>

      <Divider variant="middle" />
      <CardActions
        className="card-footer"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 25px',
        }}
      >
        <Button
          className="like-btn"
          size="large"
          variant="text"
          
          onClick={likeHandler}
          startIcon={<Favorite className="heart" color="error" />}
        >
          {like}
        </Button>

        <Tooltip title="Додати рецепт в вибране">
          <Checkbox
            icon={
              recipe.bookmark ? (
                <BookmarkIcon color='primary' />
              ) : (
                <BookmarkBorderIcon color='primary'/>
              )
            }
            checkedIcon={
              <BookmarkIcon 
              color= 'primary' />
            }
            onClick={() => {}}
          />
        </Tooltip>
      </CardActions>
    </CustomCard>
  );
}
