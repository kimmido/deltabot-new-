import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            <img src="/images/delta_logo1.png" alt="로고" />
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
