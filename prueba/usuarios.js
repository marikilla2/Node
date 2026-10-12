import { appendFile } from "node:fs/promises";
import path from "node:path";

let nombre = process.argv[2];
let email = process.argv[3];

const RUTAABS = "/home/mari/Desktop/textos";
let rutaCompleta = path.join(RUTAABS, "usuarios.txt");

if (!nombre || !email) {
  console.log("Debes introducir un nombre y un correo electrónico");
} else if (!email.includes("@")) {
  console.log("El correo electrónico debe contener @");
} else {
  let usuario = `Nombre: ${nombre}, Email: ${email}\n`;

  try {
    await appendFile(rutaCompleta, usuario);
    console.log("Usuario guardado correctamente");
  } catch (error) {
    console.log("Error al guardar el usuario: " + error.message);
  }
}
