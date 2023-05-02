import React from "react";
import { Link } from "react-router-dom";
import { useConfCotizacion } from "../../hooks/Custom.Hooks";
import { useChecked } from "./../../hooks/useChecks.Hook";

const ConfCotizacion = () => {
  const { form, setForm, handleChanges } = useConfCotizacion();

  const handleSubmit = (e) => {};

  return (
    <div>
      <div className="w-100 mx-auto mt-5">
        <h2 align="center" className="mb-3">
          Si esta todo bien, confirmanos tus datos y te enviamos el presupuesto!
        </h2>
        <form>
          <div className="row mb-3">
            <label htmlFor="text" className="col-sm-2 col-form-label">
              Nombre y Apellido
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="NombreApellido"
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="number" className="col-sm-2 col-form-label">
              N° Telefono
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="NumeroTelef"
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                name="Email"
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="text" className="col-sm-2 col-form-label">
              Nombre Empresa
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="NombreEmpresa"
                onChange={handleChanges}
              />
            </div>
          </div>
          <Link to={"/MensajeCotizacion"}>
            <button type="submit" className="btn btn-primary">
              Enviar presupuesto
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ConfCotizacion;
