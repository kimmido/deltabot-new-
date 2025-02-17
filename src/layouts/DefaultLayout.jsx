import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import ScrollTopBtn from "../components/Shared/ScrollTopBtn";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollTopBtn />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
