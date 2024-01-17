import { Response ,Request,NextFunction } from "express";
import { Product } from "../models/Product.js"; 
export const getIndex = (req: Request, res: Response,next: NextFunction) => {  
    res.render('shop/product-list', {pageTitle:'Tienda', path:'/', prods: Product.fetchAll()});
};
export const getSaludo = (req: Request, res: Response,next: NextFunction) => {
  
        res.render('prueba',{nombre: 'Ico'});
    }
