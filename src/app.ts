import express, {urlencoded} from "express";

import { rutas } from "./utils/rutas.js";
import { adminRouter } from "./routes/adminRoutes.js";
import { shopRouter } from "./routes/shopRoutes.js";
import path from "path";

console.log('------------------------------------------------------------_---');
console.log("Bienvenido a mi app");

const port =  3000;

const app = express();

app.use(urlencoded({extended: false})); //Middleware para procesar los campos que me envíen por HTTP body-parser
app.use(express.static(rutas.public)); //Mia rutas contenido estáticos .css .js
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views',rutas.views); //CAMBIAR

app.use('/admin', adminRouter); //Las rutas empiezan por /admin
app.use('/', shopRouter);
//Controladores para responder a las peticiones por HTTP





app.use('/', (req,res,next)=> {
    console.log("Middleware del final");
   res.render('404.ejs',{pageTitle:'Página no encontrada', path: '/404'});

});
// FIN 
app.listen(port);
console.log("Servidor de la app en marcha");
console.log( `Servidor disponible en http://localhost:${port}`);