import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
