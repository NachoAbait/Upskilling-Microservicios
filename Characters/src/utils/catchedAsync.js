module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((err) => {
      //la fn(req,res) es la funcion asyncrona, por lo que con el catch estariamos agarrando el error que el manejador de errores de express nmo podria
      next(err); // cuando hacemos un next(err) estamos diciendo que lo lleve al manejador de errores de express (pero sin poder aclarar el statusCode)
    });
  };
};
