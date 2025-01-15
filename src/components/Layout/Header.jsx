import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <img src="/delta_logo1.png" alt="로고" />
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
