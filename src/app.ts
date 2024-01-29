import express, {urlencoded}from "express"; 
import *  as dotenv from 'dotenv';
import { User } from "./models/User.js";
import { rutas } from "./utils/rutas.js";
import { adminRouter } from "./routes/adminRoutes.js";
import { shopRouter } from "./routes/shopRoutes.js"; 
import  {connectToDatabase } from "./services/databaseService.js";
console.log("-------------------------");
console.log("Bienvenido a mi app");
dotenv.config();
const port = process.env.PORT || 3000; 

const app = express(); //Nos trae la app
connectToDatabase()
 .then ( async () => {
    const user = new User('123456789', 'PuigdemontLesbiana', 'Monicaestonta@gmail.com', {calle: 'mitio', telf:"555",CP:'46000'} );
     await user.save(); 
} )
.then ( () => {
    console.log("Conectado a la base de datos");

//ola 


//Configurar ejs
app.set('view engine', 'ejs'); //El sistema de hacer las vistas es ejs.
app.set('views', rutas.views); //Carpeta donde se encuentran las vistas.
app.use(urlencoded({extended: false})); //Middleware para procesar los campos que me envíen por HTTP
//Urlencoded cuando nos llegue info de un formulario, lo que hace es que lo convierte en un objeto de JS

app.use(express.static(rutas.public)); //Middleware para servir ficheros estáticos de public
app.disable('x-powered-by'); //Desactivamos la cabecera X-Powered-By



//Controladores para responder a las peticiones por HTTP

app.use('/admin', adminRouter); //Middleware para las rutas de admin
app.use('/', shopRouter); //Middleware para las rutas de shop


app.use('/', (request, response, next) => {
    console.log("Ruta no encontrada");
    response.render('404', {pageTitle: "Error 404", path: "/404"});
}); //Middleware error;



// FIN
app.listen(port); //Poner en marcha la app
console.log("Servidor de la app en marcha");
console.log(`Página disponible en: http://localhost:${port}`);
}).catch ( (error) => {
    console.log("Error al conectar a la base de datos");
    console.log(error);
}
); 
console.log('FIn');
