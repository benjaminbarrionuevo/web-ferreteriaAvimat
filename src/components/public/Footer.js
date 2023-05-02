import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const companyName = "Ferreteria Avitmat";

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">
          &copy; {year} {companyName}
        </p>
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

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to={"/"} className="nav-link px-2 text-muted">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Cotizacion"} className="nav-link px-2 text-muted">
              Cotizacion Online
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Contacto"} className="nav-link px-2 text-muted">
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Blog"} className="nav-link px-2 text-muted">
              Blog
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
