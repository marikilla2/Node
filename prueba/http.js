import http from "node:http";
import { json } from "node:stream/consumers";

const error = {
  error: "Not found",
  message: "La ruta solicitada no existe en el servidor",
};

const DESIRED_PORT = 3000;

const usuarios = [
  { id: 1, nombre: "Javier", edad: 42, altura: 192 },
  { id: 2, nombre: "Pablo", edad: 19, altura: 210 },
  { id: 3, nombre: "Leandro", edad: 21, altura: 171 },
];

// Convertimos el callback del servidor en async para poder usar await
const server = http.createServer(async (req, res) => {
  const { method, url } = req;
  console.log(`Petición recibida: ${method} ${url}`);

  switch (url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end("<h1>Bienvenido a la página de home</h1>");
      break;

    case "/usuarios":
      if (method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(usuarios));
      } else if (method === "POST") {
        await metodoPost(req, res); // 👈 Esperamos a que la función asíncrona termine
      } else {
        res.statusCode = 405; // Method Not Allowed
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ error: "Método no permitido" }));
      }
      break;

    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(error));
  }
});

async function metodoPost(req, res) {
  try {
    const body = await json(req); // Lee el stream del body
    const { nombre, edad = 0, altura = 0 } = body;

    if (!nombre) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      return res.end(
        JSON.stringify({ error: "El campo 'nombre' es requerido" }),
      );
    }

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      edad,
      altura,
    };

    usuarios.push(nuevoUsuario);

    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(nuevoUsuario));
  } catch (err) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: "JSON inválido" }));
  }
}

server.listen(DESIRED_PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${DESIRED_PORT}`);
});
