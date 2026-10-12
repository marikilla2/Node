let texto = process.argv.slice(2).join(" ");

if (!texto) {
  console.log("no se ha introducido ningún texto");
} else {
  let palabras = texto.split(" ");
  console.log(palabras.length);
}
