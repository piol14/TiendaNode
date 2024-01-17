import { Router } from "express";

export const adminRouter = Router();


import { getAddProduct, postAddProduct } from "../controllers/adminCtrl.js";


//todsas las rutas que lleguen aquí empiezan por /admin



adminRouter.get('/add-product', getAddProduct);

adminRouter.post('/add-product', postAddProduct);
