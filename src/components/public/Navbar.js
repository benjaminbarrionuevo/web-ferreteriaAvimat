import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to={"/"}>
            <span className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img
                className="App-logo"
                height="52"
                src="./images/logo.png"
                alt=""
              />
            </span>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/"} className="nav-link px-2 text-white">
                AVIMAT
              </Link>
            </li>
            <li>
              <Link to={"/"} className="nav-link px-2 text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link to={"/Cotizacion"} className="nav-link px-2 text-white">
                Cotizacion Online
              </Link>
            </li>
            <li>
              <Link to={"/Contacto"} className="nav-link px-2 text-white">
                Contacto
              </Link>
            </li>
            <li>
              <Link to={"/Blog"} className="nav-link px-2 text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
