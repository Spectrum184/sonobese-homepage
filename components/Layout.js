import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <NavBar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
