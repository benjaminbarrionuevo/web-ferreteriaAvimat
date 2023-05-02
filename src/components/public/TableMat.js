import axios from "axios";
import React, { useState, useEffect } from "react";
import ConfCotizacion from "./ConfCotizacion";

const TableMat = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const showData = async () => {
    const res = await axios.get("http://localhost:4000/api/materiales");
    setUsers(res.data);
  };

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado buscador materiales
  const results = !search
    ? users
    : users.filter((dato) =>
        dato.DESCRIPCION.toLowerCase().includes(search.toLocaleLowerCase())
      );

  // metodo filtrado seleccionador rubro
  //const result = !search
  //  ? users
  //  : users.filter((dato) =>
  //      dato.RUBRO.toLowerCase().includes(search.toLocaleLowerCase())
  //    );

  //metodo mostrar checkbox seleccionados
  const selectuser = () => {
    var boton = document.getElementById("boton");
    var lista = document.getElementById("lista");
    var checks = document.querySelectorAll(".valores");

    boton.addEventListener("click", function () {
      lista.innerHTML = "";
      checks.forEach((e) => {
        if (e.checked === true) {
          var elemento = document.createElement("li");
          elemento.className = "list-group-item";
          elemento.innerHTML = e.value;
          lista.appendChild(elemento);
        }
      });
    });
  };

  //boton para ir abajo
  const boton = function () {
    var boton = document.getElementById("boton");

    document.ready(function () {
      boton.click(function () {
        window.animate({
          scrollTo: "200px",
        });
      });
    });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <div align="center" className="boton">
        <button
          type="submit"
          id="boton"
          className="btn btn-primary"
          onClick={boton}
        >
          Hacer pedido
        </button>
      </div>
      <br />
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="buscador"
        className="form-control"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>Seleccione</th>
            <th>Rubro</th>
            <th>Materiales</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.CODIGO_PROPIO}>
              <td>
                <div className="form-check">
                  <input
                    class="valores"
                    type="checkbox"
                    value={user.DESCRIPCION}
                    onChange={selectuser}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
              </td>
              <td>{user.RUBRO}</td>
              <td>{user.DESCRIPCION}</td>
              <td>
                <div className="row mb-0">
                  <label
                    htmlFor="number"
                    className="col-sm-3 col-form-label"
                  ></label>
                  <div className="col-sm-7">
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Materiales seleccionados:</h2>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>Rubro</th>
            <th>Materiales</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="lista" className="list-group"></td>
          </tr>
        </tbody>
      </table>
      <ConfCotizacion />
    </div>
  );
};

export default TableMat;
