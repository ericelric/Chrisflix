import { NavLink } from 'react-router-dom';
import logo from '../../assets/chrisflix-logo.svg';
import Search from '../Search/Search.jsx';
import { GoHistory } from 'react-icons/go';
import './Header.css';

const Header = () => {
  return (
    <header className="header header__background">
      <nav className="header__left">
        <NavLink to="/">
          <img src={logo} alt="Chrisflix Logo" className="header__logo" />
        </NavLink>
        <NavLink to="/movies" className="header__link link" data-text="Movies">
          Movies
        </NavLink>
        <NavLink
          to="/tv-shows"
          className="header__link link"
          data-text="TV Shows"
        >
          TV Shows
        </NavLink>
        <NavLink to="/Anime" className="header__link link" data-text="Anime">
          Anime
        </NavLink>
      </nav>

      <nav className="header__right">
        <Search />
        <NavLink to="/history" className="header__link header__icon link">
          <GoHistory />
        </NavLink>
        <NavLink to="/profile" className="header__link link" data-text="Eric">
          Eric
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
