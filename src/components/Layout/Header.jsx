import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h1 className="logo">
          <Link to="/">
            <img src="/images/branding/logo.svg" alt="로고" />
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
