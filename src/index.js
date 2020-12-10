//en package json hemos listado unos modulos pero no lo estamos listando
// y para utilizarlos lo llamomos 
//express del package json
const express = require('express');
const app = express(); //ejectuamos esta funcion-modulo lo que nos devuuelve es un objeto
      // y lo guardamos en una costante llamada app y esa constante nos sirver para crear un servidor, esta constante es el servidor
const path = require('path'); //lo usamos para obtener la ruta correcta

 //settings:
app.set ('port', 3000); 
     //variable para poder modificar si quisiese mi puerto, y con esto modifico ahora todos los puertos, en luegar de colocar EL NUMERO DEL PUERTO, lo que coloco es 'app.get'('port')--y asi poder modificar mi puerto en esta misma linea solo cambiado el numero del puerto
     //aqui arriba tengo el nombre de la variable llamada port y su varlor 3000
app.engine('html', require('ejs').renderFile); //AL FINAL USAMOS ARCHIVOS HTML-PERO SERAN PROCESADOS POR EJS Y RENDERISO CON renderFile
app.set('view engine', 'ejs');   //motor de vista-motor de plantilla, para decirle que motor de plantilla vamos a usar, en este caso usamos EJS, no hace falta importarlo

app.set('views', path.join(__dirname, 'views'));

//mideelewares, EXPRESS tiene este concepto, son fuciones que se EJECUTAN antes de que las rutas procesen algo, EJEMPLO: si un usuario quiere visitar determinada URL,  a traves de una funcion podemos comprobar si ese usuario tiene autorizacion o no, o cada vez que un usuario envia un dato PODEMOS pre-Procesar ese dato antes de DARSELO a las rutas, para que se haga algo.



//routes:
 app.use(require('./routes/index'));//lo importamos 


//static file, archivos estaticos. Al ser EXPRESS un framework para crear nuestro servidor, luego vamos a necesitar-IAGENES-FUENTES- CSS FILE-JS FILE- ICON-MULTPLES ARCHIVOS- PARA MEJORAr la interface y el FRON-END de  nuestra app
app.use(express.static(path.join(__dirname, 'public'))) //publico esta carpeta PUBLIC desde el navegador, cualquier archivo q hay aqui va a ser accesible desde el ordenador, y ahi se coloca imagenes-fuentes-documento pdf -LOGOTIPOS-VIDEOS-CUALQUIER ARCHIVO QUE EL NAVEGADOR PUEDA OBTENER

//listening the server:
app.listen(app.get('port'), () => { //aplicacion escucha, las aplicaciones web funciona en el puerto 3000, pero puede usar otros, cuando empieza el servidor, se va a ejecutar en el puerto 3000 y cuando lo haga,que muestre un mensaje por consola
  console.log('server on port', app.get('port'));
});

// app.listen(3000, () => {
//   console.log('server on port que yo elija, 3000');
// });