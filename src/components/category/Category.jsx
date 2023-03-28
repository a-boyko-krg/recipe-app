import { useState } from 'react';
import { Link } from 'react-router-dom';
import cats from '../../data/categoryList.js';

export default function Category() {
  const [activeId, setActiveId] = useState(0);

  const onClickCategory = (index) => {
    setActiveId(index);
  };

  return (
    <ul className="categoryList">
      {cats.map((c, index) => (
        <li
          onClick={() => onClickCategory(index)}
          className={
            activeId === index ? 'categoryListItem active' : 'categoryListItem'}
          key={c.id}
          style={{ animationDelay: c.id * 0.1 + 's' }}
        >
          <Link to={`/recipes/${c.name}`} className="categoryLink">
            <img 
            className={activeId === index ? 'categoryListImg active' : 'categoryListImg'}  
            src={`${c.img}`} 
            alt="" />
            <p>{c.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
