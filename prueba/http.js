import http from "node:http";
import { json } from "node:stream/consumers";

const error = {
  error: "Not found",
  message: "La ruta solicitada no existe en el servidor",
};

const DESIRED_PORT = 3000;

const usuarios = [
  {
    id: 1,
    nombre: "Javier",
    edad: 42,
    altura: 192,
  },
  {
    id: 2,
    nombre: "Pablo",
    edad: 19,
    altura: 210,
  },
  {
    id: 3,
    nombre: "Leandro",
    edad: 21,
    altura: 171,
  },
];

const server = http.createServer((req, res) => {
  const { method, url } = req; //let url = req.url //let method = req.method
  console.log("Petición recibida");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  switch (url) {
    case "/":
      res.statusCode = 200;
      res.end("<h1>Bienvenido a la página de home</h1>");
      break;
    case "/usuarios":
      res.statusCode = 200;
      if (method === "GET") {
        res.end(JSON.stringify(usuarios)); //para convertir el objeto a json
      } else if (req.method === "POST") {
        metodoPost(req, res);
      } else {
        res.end("Usuario creado");
      }
      //res.end("<h1>Bienvenido a la página de usuarios</h1>");
      break;
    default:
      res.statusCode = 404;
      res.end(JSON.stringify(error));
    //res.end("<h1>Página no encontrada error 404</h1>");
  }
  return; //poner el return es obligar a terminar al programa, es opcional
  //res.end("Hola desde tu primer servidor de Node.js!");
});

async function metodoPost(req, res) {
  if (req.method === "POST") {
    try {
      const body = await json(req); // 👈 Lee el stream y lo convierte a objeto JSON
      const { name } = body;
      const nuevo = {
        id: usuarios.length + 1,
        nombre: name,
        edad: 0,
        altura: 0,
      };
      usuarios.push(nuevo);
      res.statusCode = 201;
      res.end(JSON.stringify(nuevo));
    } catch (error) {
      res.statusCode = 400;
      return res.end("Invalid JSON");
    }
  }
}

server.listen(DESIRED_PORT, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${DESIRED_PORT}`,
  );
});
