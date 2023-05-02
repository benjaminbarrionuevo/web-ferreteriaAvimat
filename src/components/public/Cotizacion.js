import React from "react";
import TableMat from "./TableMat";

const Cotizacion = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <h2 align="center">PEDIR COTIZACION ONLINE</h2>
      <p>
        Con Avimat pedí tu cotizacion de nuestros productos y te lo enviamos en
        unos minutos
      </p>
      <p>
        Nos das el OK, te preparamos tu pedido y lo dejamos listo para que lo
        retires sin perder tiempo
      </p>
      <strong>¿Cómo hago el pedido?</strong>
      <p>Selecciona los artículos que necesitas</p>
      <p>Ingresa la cantidad</p>
      <p>
        Click en Hacer pedido, verificas que este todo ok, cargas tus datos y
        listo, en unos minutos recibiras el presupuesto en tu correo y Whatsapp
      </p>
      <TableMat />
    </div>
  );
};

export default Cotizacion;
