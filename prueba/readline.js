import readline from "node:readline/promises";
import validator from "validator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function nombreFuncion() {
  try {
    const respuesta = await rl.question("Introduce un número del 1 al 10: ");

    // validator.isInt comprueba si es un entero y permite definir min/max
    if (validator.isInt(respuesta, { min: 1, max: 10 })) {
      console.log("¡Tu número es correcto!: " + respuesta);
    } else {
      console.log("Error: El dato ingresado no es un número entre 1 y 10.");
    }
  } catch {
    console.log("Error en el proceso");
  } finally {
    rl.close();
  }
}

nombreFuncion();
