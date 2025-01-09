import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo"></h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
