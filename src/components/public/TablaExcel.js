var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var app = express();

app.use(express.json());
app.use(cors());

//establecemos parametros de conexion
var conexion = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "stockavimat",
};

//probamos conexion
//conexion.connect(function (err) {
//  if (err) {
//    throw err;
//  } else {
//    console.log("conexion exitosa");
//  }
//});

// app.get("/", function (req, res) {
//  res.send("Inicio");
// });

//mostrar todos los materiales
app.get("/api/materiales", (req, res) => {
  var connection = mysql.createConnection(conexion);
  connection.query("SELECT * FROM stockavimat", (error, filas) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(filas);
    }
  });
});

const puerto = process.env.PUERTO || 4000;

app.listen(puerto, function () {
  console.log("Servidor OK " + puerto);
});
