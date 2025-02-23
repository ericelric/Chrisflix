import { NavLink } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = () => {
  return (
    <>
      <input
        type="checkbox"
        className="mobile-menu__checkbox"
        id="menu-toggle"
      />
      <label htmlFor="menu-toggle" className="mobile-menu__button">
        <span className="mobile-menu__icon"></span>
      </label>
      <div className="mobile-menu__overlay">
        <nav className="mobile-menu__list">
          <NavLink
            to="/movies"
            className="mobile-menu__link"
            data-text="Movies"
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv-shows"
            className="mobile-menu__link"
            data-text="TV Shows"
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/Anime"
            className="mobile-menu__link mobile-menu__link--no-border"
            data-text="Anime"
          >
            Anime
          </NavLink>

          <div className="mobile-menu__spacing"></div>

          <NavLink to="/history" className="mobile-menu__link">
            Favorites
          </NavLink>
          <NavLink
            to="/profile"
            className="mobile-menu__link mobile-menu__link--no-border"
            data-text="Eric"
          >
            My Profile
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
