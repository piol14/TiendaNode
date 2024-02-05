import { Router } from "express";
import { getIndex, getProducts, getProductById, postCart, getCart, deleteCartItem, postCartDecreaseItem, postCartIncreaseItem , } from "../controllers/shopCtrl.js";



export const shopRouter =  Router();

//Usamos get y por lo tanto exige coincidencia "completa", no capa otras rutas

shopRouter.get('/',getIndex);
shopRouter.get('/products',getProducts);

shopRouter.get('/products/:productId',getProductById);
// shopRouter.get('/saludo', getSaludo);
// shopRouter.get('/saludo/',getSaludo);
 shopRouter.post('/add-to-cart', postCart);
  shopRouter.get('/cart',getCart);
shopRouter.post('/cart-delete-item', deleteCartItem );
shopRouter.post('/cart-increase-item',postCartIncreaseItem);
 shopRouter.post('/cart-decrease-item',postCartDecreaseItem); 