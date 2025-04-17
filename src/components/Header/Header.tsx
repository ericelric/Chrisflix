import { NavLink } from "react-router-dom";
import { GoHeart, GoSmiley } from "react-icons/go";
import Search from "../Search/Search";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "../../assets/chrisflix-logo.svg";
import "./Header.css";

const Header = (): React.JSX.Element => {
  return (
    <header className="header header__background">
      <nav className="header__left">
        <NavLink to="/">
          <img src={logo} alt="Chrisflix Logo" className="header__logo" />
        </NavLink>
        <NavLink to="/movies" className="header__link link" data-text="Movies">
          Movies
        </NavLink>
        <NavLink to="/tv-shows" className="header__link link" data-text="TV Shows">
          TV Shows
        </NavLink>
        <NavLink to="/anime" className="header__link link" data-text="Anime">
          Anime
        </NavLink>
      </nav>

      <nav className="header__right">
        <Search />
        <NavLink to="/favorites" className="header__icon link" title="Favorites">
          <GoHeart />
        </NavLink>
        <NavLink to="/profile" className="header__icon link" title="My Profile">
          <GoSmiley />
        </NavLink>
        <MobileMenu />
      </nav>
    </header>
  );
};
export default Header;
