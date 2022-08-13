import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {

  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <NavLink to="/" className="header__nav_navlink">
            Quizz<span>App</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
