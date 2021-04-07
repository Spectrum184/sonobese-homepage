import React from "react";

const NavBar = ({ position }) => {
  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        position > 90 ? "navbar-shrink" : ""
      }`}
    >
      <div className="container">
        {/* <!-- Brand --> */}
        <a className="navbar-brand" href="/">
          園部製作所
        </a>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                紹介
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                製品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                設備
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                活動
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                アドレス
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
