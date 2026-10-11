import { readFile, writeFile, appendFile } from "node:fs/promises";
import path from "node:path";

let operacion = process.argv[2];
let nombreArchivo = process.argv[3];
let contenido = process.argv[4];
const RUTAABS = "/home/mari/Desktop/textos";

let nuevaRuta = path.join(RUTAABS, nombreArchivo);

if (operacion == "leer") {
  try {
    let resultado = await readFile(nuevaRuta, "utf-8");
    console.log(resultado);
  } catch (error) {
    console.log("No se ha podido leer el archivo: " + error.message);
  }
} else if (operacion == "escribir" && contenido) {
  try {
    await writeFile(nuevaRuta, contenido);
    console.log("Se ha podido escribir en el archivo");
  } catch (error) {
    console.log("No se ha podido escribir en el archivo: " + error.message);
  }
} else if (operacion == "añadir" && contenido) {
  try {
    await appendFile(nuevaRuta, "\n" + contenido);
    console.log("texto añadido correctamente: " + contenido);
  } catch (error) {
    console.log("Se ha producido un error al añadir contenido" + error.message);
  }
} else {
  console.log(
    "no es ninguna de las operaciones siguientes: leer, escribir, añadir",
  );
}
