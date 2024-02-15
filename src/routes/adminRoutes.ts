import { Router } from "express";
import { getAddProduct, getProducts, postAddProduct , getEditProduct, postEditProduct, deleteProduct, getAddEvent, postAddEvent, postEditEvent, deleteEvent} from "../controllers/adminCtrl.js";
import {getEvents} from "../controllers/eventCtrl.js";
export const adminRouter = Router();
/* 
import { deleteProduct, getAddProduct, getEditProduct, getProducts, postAddProduct, postEditProduct } from "../controllers/adminCtrl.js";
import { getProductById } from "../controllers/shopCtrl.js";
 */
// Todas las rutas que lleguen aquí empiezan por /admin

// Ruta para obtener todos los productos
adminRouter.get('/products', getProducts); 

 // Ruta para obtener el formulario de agregar producto
adminRouter.get('/add-product', getAddProduct);

// Ruta para obtener el formulario de editar producto
adminRouter.get('/add-product/:productId',getEditProduct);

// Ruta para agregar un nuevo producto
adminRouter.post('/add-product', postAddProduct);
adminRouter.post('/edit-product', postEditProduct);
adminRouter.post('/delete-product', deleteProduct);

adminRouter.get('/add-event', getAddEvent);

adminRouter.post('/add-event', postAddEvent);
adminRouter.post('/edit-event', postEditEvent);
adminRouter.post('/delete-event', deleteEvent);