import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import {
  faHome,
  faList,
  faCog,
  faBookBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { AppBar } from '@mui/material';
import SearchBar from '../search/SearchBar.jsx'



export default function Navbar() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const links = [
    {
      name: 'Головна',
      path: '/',
      icon: faHome,
    },
    {
      name: 'Рецепти',
      path: '/recipes/Всі',
      icon: faList,
    },
    {
      name: 'Вибране',
      path: '/recipes/favourites',
      icon: faBookBookmark,
    },
    {
      name: 'Налаштування',
      path: '/settings',
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <AppBar position="sticky" elevation={0}>
      <div className="navbar container">
        <Link className="logo navbar-logo" to="/">
          Технологія 🍔 Cмаку
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              key={link.name}
            >
              <FontAwesomeIcon icon={link.icon} />
              {link.name}
            </Link>
          ))}
        </div>
        <SearchBar />
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && (
        <Sidebar close={closeSidebar} state={showSidebar} links={links} />
      )}
    </AppBar>
  );
}
