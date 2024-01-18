import { Router } from "express";

export const adminRouter = Router();


import { getAddProduct, getProducts, postAddProduct } from "../controllers/adminCtrl.js";


//todsas las rutas que lleguen aquí empiezan por /admin


adminRouter.get('/products', getProducts);
adminRouter.get('/add-product', getAddProduct);
adminRouter.get('/add-product/:productId');
adminRouter.post('/add-product', postAddProduct);
