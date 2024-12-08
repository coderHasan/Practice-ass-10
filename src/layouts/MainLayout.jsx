import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.getElementById("dark-mode").classList.add("dark");
    } else {
      document.getElementById("dark-mode").classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <header>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <Outlet />
      <footer className="">
        <Footer />
      </footer>
    </main>
  );
};

export default MainLayout;
