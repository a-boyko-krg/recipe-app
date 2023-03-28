import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function ChiefCard({ chief }) {
  return (
    <div className="card">
      <div className="card-more">
        <KeyboardArrowDownIcon />
      </div>
      <div className="card-image">
        <img src={chief.img} alt="" />
      </div>

      <div className="card-body">
        <div className="content">
          <h2>{chief.name}</h2>
          <div className="card-social">
            <IconButton>
              <FacebookIcon color="primary" />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: 'violet' }} />
            </IconButton>
            <IconButton>
              <YouTubeIcon color="error" fontSize="large" />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: '#13b4ff' }} />
            </IconButton>
          </div>
          <div className="card-info">
            <h3>
              {chief.recipesCounter}
              <br />
              <span>рецептів</span>
            </h3>
            <h3>
              {chief.followerСounter}
              <br />
              <span>підписників</span>
            </h3>
            <h3>
              {chief.likesСounter}
              <br />
              <span>лайків</span>
            </h3>
          </div>
          <Button
            variant="outlined"
            startIcon={<CheckIcon />}
            sx={{ margin: '10px 0' }}
          >
            Підписатись
          </Button>
        </div>
      </div>
    </div>
  );
}
