const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 6, mostrar = false, limite = 12) => {
  try {
    console.clear();

    let output,
      consola = "";

    for (let i = 0; i <= limite; i++) {
      output += ` ${base} ${"x".green} ${i} = ${base * i}\n`;
      consola += ` ${base} x ${i} = ${base * i}\n`;
    }

    if (mostrar) {
      console.log("==========".green);
      console.log(`Tabla del ${base}`);
      console.log("==========".green);
      console.log(output);
    }

    fs.writeFileSync(`./archive/Tabla ${base}.txt`, consola);

    return `tabla ${base}.txt creado`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
