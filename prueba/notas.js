const notas = [6, 8, 4, 9, 7];
let suma = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {
  console.log(notas[i]);
  if (notas[i] >= 5) {
    console.log("Aprobado");
  } else {
    console.log("Suspenso");
  }
  suma += notas[i];
}
media = suma / notas.length;
console.log("La cantidad de notas es " + notas.length);
console.log("La suma de todas las notas es: " + suma);
console.log("La media de notas es: " + media);

if (media >= 5) {
  console.log("La media está aprobada");
} else {
  console.log("La media está suspensa");
}
