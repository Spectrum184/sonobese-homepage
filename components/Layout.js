import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Introduce from "./Introduce";
import Product from "./Product";
import Equipment from "./Equipment";
import Activity from "./Activity";
import Contact from "./Contact";
import About from "./About";

const Layout = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="app">
      <NavBar position={scrollTop} />
      <Home />
      <Introduce />
      <Product />
      <Equipment />
      <Activity />
      <Contact />
      <About />
      {children}
    </div>
  );
};

export default Layout;
