import React from "react";

const MensajeCotizacion = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h2>TU CONSULTA ESTA EN PROCESO!</h2>
        <br />
        <br />
        <br />
        <br />
        <p>
          Estamos confeccionando tu presupuesto, en unos minutos te lo enviamos
          vía mail y Whatsapp
        </p>
        <p>Si nos das el ok, lo preparamos y los dejamos listo para retirar.</p>
        <p>Recorda que podes abonar con los siguientes medios de pago:</p>
        <p>
          Efectivo - Debito - Tarjeta de Crédito - Mercado Pago - Transferencia
        </p>
        <h1 className="display-5 fw-bold">
          Seguinos en nuestras redes sociales
        </h1>
        <div className="col-lg-6 mx-auto">
          <img
            className="logo-instagram"
            height="80"
            src="./images/instagram.png"
            alt=""
          />
          <img
            className="logo-facebook"
            height="80"
            src="./images/facebook.png"
            alt=""
          />
          <img
            className="logo-twitter"
            height="80"
            src="./images/twitter.png"
            alt=""
          />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </div>
  );
};

export default MensajeCotizacion;
