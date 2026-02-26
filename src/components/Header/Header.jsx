import { NavLink } from "react-router-dom";

import "./Header.css";
import homeStroke from "../../assets/home-stroke.svg";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/" className="header__link">
          <h1 className="header__title">NewsExplorer</h1>
        </NavLink>
      </div>
      <div className="header__btns">
        <NavLink to="/" className="header__link">
          <button className="header__btns-home">Home</button>
          <img className="header__btns-home-stroke" src={homeStroke} />
        </NavLink>
        <button className="header__btns-login">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
