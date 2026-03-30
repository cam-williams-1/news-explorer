import { NavLink } from "react-router-dom";
import "./Header.css";
import homeStroke from "../../assets/home-stroke.svg";
import savedNewsStroke from "../../assets/savednews-stroke.svg";
import logoutIcon from "../../assets/logout.svg";

function Header({ isLoggedIn, isSavedNews, currentUser, onSignIn, onSignOut }) {
  return (
    <header className={isSavedNews ? "header__saved-news" : "header"}>
      <div className="header__logo">
        <NavLink to="/" className="header__link">
          <h1
            className={
              isSavedNews ? "header__title_saved-news" : "header__title"
            }
          >
            NewsExplorer
          </h1>
        </NavLink>
      </div>
      <div className={isLoggedIn ? "header__btns_logged-in" : "header__btns"}>
        {/* Home Button (always visible) */}
        <NavLink to="/" className="header__link">
          <button
            className={
              isSavedNews ? "header__btns-home-saved-news" : "header__btns-home"
            }
          >
            Home
            {!isSavedNews && (
              <img
                className="header__btns-home-stroke"
                src={homeStroke}
                alt="home underline"
              />
            )}
          </button>
        </NavLink>

        {/* Saved Articles (only if logged in) */}
        {isLoggedIn && (
          <NavLink to="/saved-news" className="header__link">
            <button
              className={
                isSavedNews
                  ? "header__btns-saved-saved-news"
                  : "header__btns-saved"
              }
            >
              Saved Articles
              {isSavedNews && (
                <img
                  className="header__btns-home-stroke-saved-news"
                  src={savedNewsStroke}
                  alt="saved news underline"
                />
              )}
            </button>
          </NavLink>
        )}

        {/* Auth/User Button */}
        {!isLoggedIn ? (
          <button
            className={
              isSavedNews
                ? "header__btns-login-saved-news"
                : "header__btns-login"
            }
            onClick={onSignIn}
          >
            Sign In
          </button>
        ) : (
          <button
            className={
              isSavedNews
                ? "header__btns-login-saved-news"
                : "header__btns-login"
            }
            onClick={onSignOut}
          >
            {currentUser?.name || "Cam"}
            <img
              className="header__btns-login-saved-news-logout"
              src={logoutIcon}
              alt="logout icon"
            />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
