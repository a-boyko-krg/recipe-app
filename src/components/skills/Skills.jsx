import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Skills() {
  const list = [
    'Вивчай нові рецепти',
    'Експериментуй з їжею',
    'Пиши власні рецепти',
    'Дізнавайся факти про харчування',
    'Отримуй кулінарні поради',
    'Отримуй рейтинг',
  ];
  return (
    <section className="section skills">
      <div className="col img">
        <img src="/img/gallery/aboutMeImg.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Прокачай свої кулінарні навички</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}

        <Button>
          <Link to="/recipes/Всі" className="btn">
            Приєднатися зараз
          </Link>
        </Button>
      </div>
    </section>
  );
}
