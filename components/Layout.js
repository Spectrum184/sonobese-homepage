import React from "react";
import NavBar from "./NavBar";
import Loading from "./helpers/Loading";
import Introduce from "./Introduce";
import Contact from "./Contact";
import About from "./About"

const Layout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Introduce/>
        <Contact/>
        <About/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
