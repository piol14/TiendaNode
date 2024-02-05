import { Router } from "express";
import { getAddProduct, getProducts, postAddProduct , getEditProduct, postEditProduct} from "../controllers/adminCtrl.js";

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

//adminRouter.post('/delete-product', deleteProduct); 