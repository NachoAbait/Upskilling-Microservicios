const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/characters", require("./routes"));

server.use((err, req, res, next) => {
  // AL SER UNA F(X) DE 4 PARAMETROS, EXPRESS YA LO TOMA COMO EL MANEJADOR DE ERRORES, POR LO QUE PODEMOS REESCRIBIRLO A GHSTO
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
