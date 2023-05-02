import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient"></div>
            <img
              className="logo-casita"
              height="65"
              src="./images/casita.png"
              alt=""
            />
            <h2>VISITANOS</h2>
            <p>Pje. Bordabehere 17 - Local 1</p>
            <p>A metros de Av. Avellaneda - S.M. de Tucuman</p>
            <p>Lunes a viernes:</p>
            <p>8:30 a 12:30 / 16:30 - 19:30 hs</p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient"></div>
            <img
              className="logo-telefono"
              height="65"
              src="./images/telefono.png"
              alt=""
            />
            <h2>TELEFONOS</h2>
            <p>Telefono: 3814502716</p>
            <p>
              whatsapp: <a href="https://wa.me/543813949166">3813949166</a>
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient"></div>
            <img
              className="logo-email"
              height="65"
              src="./images/email.png"
              alt=""
            />
            <h2>E-MAIL</h2>
            <p>E-Mail:</p>
            <p>avimat@gmail.com</p>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient"></div>
            <img
              className="logo-cotizar"
              height="65"
              src="./images/cotizar.png"
              alt=""
            />
            <h2>COTIZACION ONLINE</h2>
            <p>Presupuestamos tus materiales en el acto</p>
            <Link to={"/Cotizacion"}>Cotizacion Online</Link>
          </div>
        </div>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">
            Seguinos en nuestras redes sociales
          </h1>
          <div className="col-lg-6 mx-auto">
            <a href="https://www.instagram.com/avimat.tuc">
              <img
                className="logo-instagram"
                height="80"
                src="./images/instagram.png"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/avimat.tuc">
              <img
                className="logo-facebook"
                height="80"
                src="./images/facebook.png"
                alt=""
              />
            </a>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
