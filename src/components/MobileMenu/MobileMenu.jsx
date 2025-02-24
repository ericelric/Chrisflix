import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './MobileMenu.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="mobile-menu__button" onClick={toggleMenu}>
        <span className={`mobile-menu__icon ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`mobile-menu__overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-menu__list">
          <NavLink
            to="/movies"
            className="mobile-menu__link"
            onClick={closeMenu}
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv-shows"
            className="mobile-menu__link"
            onClick={closeMenu}
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/Anime"
            className="mobile-menu__link mobile-menu__link--no-border"
            onClick={closeMenu}
          >
            Anime
          </NavLink>

          <div className="mobile-menu__spacing"></div>

          <NavLink
            to="/history"
            className="mobile-menu__link"
            onClick={closeMenu}
          >
            Favorites
          </NavLink>
          <NavLink
            to="/profile"
            className="mobile-menu__link mobile-menu__link--no-border"
            onClick={closeMenu}
          >
            My Profile
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
