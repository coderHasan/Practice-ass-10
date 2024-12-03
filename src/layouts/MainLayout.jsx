import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
