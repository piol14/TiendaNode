import express from "express";
import { rutas } from './utils/rutas.js';

console.log('----------------------------------------------------------------');
console.log('Bienvenido a mi app');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', rutas.views);

// Controladores para responder a las peticiones por Http
app.get('/saludo', (req, res) => {
    res.render('prueba',{nombre:'Rayan goslink'});
});

app.get('/automovil', (req, res, next) => {
    res.send('Pasamos por el primer middleware app.get');
    res.redirect('/coche');
});

app.use('/coche', (req, res, next) => {
    console.log('Peticion recibida');
    next();
});

app.use('/coche', (req, res, next) => {
    console.log('Estamos en el segundo middleware');
    res.send({ mensaje: 'ok' });
});

app.use('/', (req, res, next) => {
    console.log('Middleware del final');
    res.status(404).send({ mensaje: 'No se ha encontrado la ruta' });
});

// FIN 
app.listen(port);
console.log('Servidor de la app en marcha');
