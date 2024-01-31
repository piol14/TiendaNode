import { Request, Response, NextFunction } from "express";

import { Product } from "../models/Product.js";


export const getProducts = async(req: Request, res: Response) => {
    res.render('admin/products', { pageTitle: 'Admin Products', path: '/admin/products', prods:  await Product.fetchAll() });
};

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("Devolvemos el formulario para meter productos");
    res.render('admin/edit-product', { pageTitle: "Formulario", path: "/admin/add-product", editing: false });
}

export const postAddProduct = async (req: Request, res: Response, next: NextFunction) => {

    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    console.log(description);
    const price = +req.body.price;
    if (req.body.title) {
        console.log('Ha llegado el siguiente producto: ', req.body.title);
        const producto = new Product(
            title,
            imageURL,
            description,
            price
        );
       await producto.save();
    }
    console.log('pasa')
    res.redirect('/products');
}
/*
export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    console.log(description);
    const price = +req.body.price;
    if (req.body.title) {
        console.log('Ha llegado el siguiente producto: ', req.body.title);
        const producto = new Product(
            title,
            imageURL,
            description,
            price
        );
        producto.save();
    }
    console.log('pasa')
    res.redirect('/products');


}
export const getEditProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("Devolvemos el formulario para editar productos");
    const editMode = req.query.edit == 'true';
    if (!editMode) {
        return res.redirect('/products');
    }
    const productId = +req.params.productId;
    const product = Product.findById(productId);
    if (product) {
        res.render('admin/edit-product', { pageTitle: "Formulario edición", path: "/admin/add-product", editing: editMode, product: product });
    }
    else {
        res.redirect('/products');
    }
}


export const postEditProduct = (req: Request, res: Response, next: NextFunction) => {
    const productId = +req.body.productId;
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    console.log(description);
    const price = +req.body.price;
 const product = new Product(title,imageURL,description,price,productId);
 
        product.save();
        
    
   
    res.redirect('/admin/products');
}

//el delete product

export const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    const productId = +req.body.productId;
     Product.deletebyproductId(productId);
   
        res.redirect('/admin/products');
   
      
    
} */