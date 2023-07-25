const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();

crearArchivo(argv.b, argv.m, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
