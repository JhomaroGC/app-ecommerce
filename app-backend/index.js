import express from "express";

const PORT = process.env.PORT || 4000; // Proces.env.PORT es para trabajar con las variables de entorno
const app = express();

/*=======================Esto es un middleware=====================
req: es información que nos llega
res: es la respuesta nuestra del servidor, una vez quiera ir a esta ruta*/
app.get("/", (req, res) => {
  res.send("Hello World! hola Jhomaro");
});

app.listen(PORT, () => {
  console.log(`Servidor conectado en el puerto# ${PORT}`);
});
