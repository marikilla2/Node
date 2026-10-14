import readline from "node:readline/promises";
import validator from "validator";
import { format } from "date-fns";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    const email = await rl.question("Introduce tu email: ");
    if (email && validator.isEmail(email)) {
      console.log("Email Válido!: " + email);
    } else {
      console.error("Error: Introduce un email válido.");
    }

    const fecha = await rl.question(
      "Introduce tu fecha de nacimiento (yyyy/mm/dd): ",
    );

    // Convertimos la cadena ingresada a un objeto Date nativo
    const fechaObj = new Date(fecha);

    // Si la fecha no es válida, fechaObj.getTime() devuelve NaN
    if (fecha && !isNaN(fechaObj.getTime())) {
      const valida = format(fechaObj, "dd-MM-yyyy");
      console.log("Tu fecha es correcta!: " + valida);
    } else {
      console.error("Error: Introduce una fecha de nacimiento válida.");
    }
  } catch (error) {
    console.error("Error general en el proceso.");
  } finally {
    rl.close();
  }
}

main();
