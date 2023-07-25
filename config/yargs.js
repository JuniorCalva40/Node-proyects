const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base de la multiplicación",
  })
  .option("m", {
    alias: "mostrar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("l", {
    alias: "limite",
    type: "number",
    default: 12,
    describe: "Muestra el limite de tu tabla",
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw new Error("La base debe ser un número");
    }
    return true;
  }).argv;

module.exports = argv;
