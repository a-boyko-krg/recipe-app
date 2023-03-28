import { Button, FormControl, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';

export default function Footer() {
  const SubscribeInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
    },
  }));
  return (
    <div className="footer container">
      <section className="footer-section footer-left">
        <Link to="/" className="logo">
          Технологія 🍔 Cмаку
        </Link>
        <p>Місце, де можна потішити свою душу і шлунок.</p>
        <p>&copy; 2023 | All Rights Reserved</p>
      </section>
      <section className="footer-section footer-center">
        <p className="title">Зв'язуйся з нами</p>
        <Button
          variant="text"
          startIcon={<MailOutlineIcon />}
          sx={{ color: 'var(--primary-color)' }}
        >
          <Link className="footer-link" to="mailto:flavor-tech@gmail.com">
            flavor-tech@gmail.com
          </Link>
        </Button>
        <Button
          variant="text"
          startIcon={<SupportAgentIcon />}
          sx={{ color: 'var(--primary-color)' }}
        >
          <Link to="tel:380683024215">+38(068)302-4215</Link>
        </Button>
        <Button
          variant="text"
          startIcon={<LocationOnOutlinedIcon />}
          sx={{ color: 'var(--primary-color)' }}
        >
          <Link to="https://goo.gl/maps/RZLPWfe5QXQAzWJZ8" target="blank">
            м.Дніпро, вул.Володимирська,23
          </Link>
        </Button>
      </section>

      <section className="footer-section footer-right">
        <div className="footer-social">
          <p className="title">Слідкуй за нами</p>
          <IconButton>
            <FacebookIcon color="primary" sx={{ fontSize: '45px' }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: 'violet', fontSize: '45px' }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon color="error" sx={{ fontSize: '45px' }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: '#13b4ff', fontSize: '45px' }} />
          </IconButton>
        </div>
      </section>
      <section className="footer-section footer-right">
        <div className="footer-subscribe">
          <p className="title">Підписуйся на наші новини</p>
          <div className="footer-form">
            <FormControl variant="standard">
              <SubscribeInput
                type="email"
                placeholder="Введіть свій Email тут!"
                sx={{ backgroundColor: '#fff' }}
              />
            </FormControl>
            <IconButton>
              <ForwardToInboxIcon sx={{ color: '#fff', fontSize: '45px' }} />
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
}
