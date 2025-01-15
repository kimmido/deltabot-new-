import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* 라우팅되는 컴포넌트가 여기서 렌더링 */}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
