import readline from "node:readline/promises";
import validator from "validator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const palabra = await rl.question("Introduce una palabra en minuscula: ");
  console.log(palabra);
  if (validator.isLowercase(palabra)) {
    console.log(
      "bravo, la palabra está en minuscula y es la siguiente: " + palabra,
    );
  } else {
    console.log("error, la palabra no está en minuscula o no es válida");
  }
  rl.close();
}

main();
