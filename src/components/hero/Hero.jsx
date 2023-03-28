import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageBlock from '../imageBlock/ImageBlock';

function Hero() {
  const images = [
    '/img/gallery/img_1.jpg',
    '/img/gallery/img_2.jpg',
    '/img/gallery/img_3.jpg',
    '/img/gallery/img_4.jpg',
    '/img/gallery/img_5.jpg',
    '/img/gallery/img_6.jpg',
    '/img/gallery/img_7.jpg',
    '/img/gallery/img_8.jpg',
    '/img/gallery/img_9.jpg',
  ];

  return (
    <section className="section hero">
      <div className="col typography">
        <h1 className="title">Хто ми такі</h1>
        <p className="info">
          <span>Технологія Cмаку</span> - це місце, де ви можете потішити свою
          душу і шлунок смачними рецептами страв будь-якої кухні. І наш сервіс
          абсолютно безкоштовний. Тож починайте досліджувати прямо зараз.
        </p>
        <Button>
          <Link to="/recipes/Всі" className="btn">
            Почати зараз
          </Link>
        </Button>
      </div>
      <div className="col galery">
        {images.map((src, index) => (
          <ImageBlock key={index} imgSrc={src} pt={'90%'} />
        ))}
      </div>
    </section>
  );
}
export default Hero;
