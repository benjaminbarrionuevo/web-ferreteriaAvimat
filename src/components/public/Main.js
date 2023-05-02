import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <button className="btn btn-primary btn-lg" type="button">
              Ingresa aquí para pedir tu cotización
            </button>
            <p className="col-md-8 fs-4">
              <ul>
                <li>Pedí tu presupuesto de forma rápida y fácil</li>
                <li>Te lo enviamos a tu mail o Whatsapp</li>
                <li>
                  Nos das el OK, preparamos tus productos y lo dejamos listo
                  para retirar y no pierdas tiempo de espera!
                </li>
              </ul>
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Ingresa aquí para pedir tu cotización
            </button>
          </div>
        </div>
      </div>
    );
  }
}
