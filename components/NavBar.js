import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="#">
          <a className="navbar-brand">Navbar</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="#">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">Link</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link href="#">
                <a
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle"
                >
                  Dropdown
                </a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="#">
                  <a className="dropdown-item">Action</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item">Another action</a>
                </Link>
                <div className="dropdown-divider"></div>
                <Link href="#">
                  <a className="dropdown-item">Something else here</a>
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;