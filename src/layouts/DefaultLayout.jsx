import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FloatingBtn from "../components/UI/FloatingBtn";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <FloatingBtn />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
