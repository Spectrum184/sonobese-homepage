import React from "react";
import NavBar from "./NavBar";
import Loading from "./helpers/Loading";
import Introduce from "./Introduce";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
