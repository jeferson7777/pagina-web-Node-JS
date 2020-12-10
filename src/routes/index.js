//empiezo a separar las partes de mi aplicacion, en este caso de las RUTAS
//COPIO lo que tenia en index.js principal
//dos pasos necesarios: 1= llamarlo desde este archivo, es decir los exportamos
// 2= importarlo desde index.js principal

const express = require("express");
const router = express.Router(); //modelo de Expres llamado Router, que sirve para crear multiples rutas y manternerlas en archivos separados

//routes

router.get("/", (req, res) => {
  //creamos una ruta inical identificada con ('/') se maneja desde una funcion que envia como respuesta: 'aqui estoy intentando hacer una pagina web'
  //ENVIAMOS UUN ARCHIVO Y DAMOS LA DIRECCION DESDE index.html dentro de la carpeta VIEWA/debemos especificar la ruta ABSOLUTA/ y para eso usamos la constante path -const path
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render("index.html", { title: "LA WEB DE JEFERSON " });
  //es necesario decirle a NODE donde esta mi carpeta views, por eso en la linea: 15   lo indicamos
}); //tenemos una constante en NODE llamada __dirname

//res.render('index', {variable:'valor de la variable'}); eso lo colamos dentro de la ruta, como un ejemplo donde: al archivo "index.ejs"queremos enviar una especie de variable, supongamos que tenemos una base de datos y queremos enviar esos datos desde el servidor hasta la vista archivo index.ejs. añadimos un objeto con la variable y su valor y en index.ejs lo llamamos con <%%>----y esto se hace usando LOS MOTORES DE PLANTILLA- EJS

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "PAGINA DE CONTACTO" });
});

router.get("/nails-cindy", (req, res) => {
  res.render("nails-cindy.html", {
    title: "PAGINA = nails-cindy",
  });
});

module.exports = router; //exporto desde aqui

//creamos mas rutas
