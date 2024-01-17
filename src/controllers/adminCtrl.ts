       
import { Request, Response, NextFunction } from "express";
import { Product } from "../models/Product.js";
export const getAddProduct =(req: Request,  res:Response , next: NextFunction) => {
    console.log("Devolvemos el formulario para meter productos");
    //response.send('<form action="/admin/product" method="POST"><input type="text" name="nombre"><button type="submit">Enviar</button></form>');
    res.render("admin/add-product", { pageTitle: 'Añadir producto', path: '/admin/add-product' });
}

export const postAddProduct = (request: Request, response: Response, next: NextFunction) => {
    const title = request.body.title;
    const imageUrl = request.body.imageURL;
    const description = request.body.description;
    const price = +request.body.price;
  

    if (request.body.title) {
        console.log("Producto añadido:", request.body.title);
        const producto = new Product(
            title,
            imageUrl,
            description,
            price
        );
        producto.save();
       
        }
        console.log('pasa')
        response.redirect('/');
    

}