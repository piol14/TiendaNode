import { Request,Response, NextFunction } from "express";

import { Product } from "../models/Product.js";
import { Events } from "../models/Events.js";


export const getProducts = async (req: Request,res:Response) => {  
    res.render('admin/products', {
        pageTitle:'Admin Products', 
        path:'/admin/products', 
        prods: await Product.fetchAll()});
};

export const getAddProduct = (req: Request,res: Response,next: NextFunction)=>{
    console.log("Devolvemos el formulario para meter productos");
    res.render('admin/edit-product',{pageTitle: "Formulario", path: "/admin/add-product", editing: false});
};
export const postAddProduct = async (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const imageURL =  req.body.imageURL;
    const description = req.body.description;
    console.log(description);
    const price = +req.body.price;
    if(req.body.title){
        const producto = new Product(
            title,
            imageURL,
            description,
            price
        );
        await producto.save();
    }
    res.redirect('/products');
}


export const getEditProduct = async (req: Request,res: Response,next: NextFunction)=>{
    console.log("getEdtitProduct: Devolvemos el formulario para editar productos");
    const editMode = req.query.edit === 'true';
    if(!editMode){
        return res.redirect('/products');
    }
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if(product){
        res.render('admin/edit-product',
        {
            pageTitle: "Formulario edición", 
            path: "/admin/add-product", //Ebtrada de la barra de navegación que vamos a sombrear    
            editing: editMode,
            product: product
        });
    }else{
        res.redirect('/products');
    }
};
export const postEditProduct = async (req: Request,res: Response,next: NextFunction)=>{
    const productId = req.body.productId;
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const price =  +req.body.price;
    const product = new Product(title, imageURL, description, price, productId);
    console.log(product);
    await product.save();
    res.redirect('/admin/products');
}
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.body.productId; 
        const deletedProduct = await Product.deleteById(productId);
        res.redirect('/admin/products');
        console.log("Producto borrado");
    }
    export const getEvents = async (req: Request, res: Response) => {
        res.render('admin/events', {
            pageTitle: 'Admin Events',
            path: '/admin/events',
            events: await Events.fetchAll() // Obtener todos los eventos
        });
    };
    
    // Función para obtener el formulario para agregar un evento
    export const getAddEvent = (req: Request, res: Response, next: NextFunction) => {
        console.log("Devolvemos el formulario para agregar eventos");
        res.render('admin/edit-event', { pageTitle: "Formulario de Evento", path: "/admin/add-event", editing: false });
    };
    
    // Función para agregar un nuevo evento
    export const postAddEvent = async (req: Request, res: Response, next: NextFunction) => {
        const title = req.body.title;
        const description = req.body.description;
        const fecha = req.body.fecha;
      
        const imageURL= req.body.imageURL
        const price = req.body.price
        if (req.body.title) {
            const event = new Events(
                title,
                imageURL,
                description,
                price,
                fecha,
                
            );
            await event.save();
        }
        res.redirect('/admin/events');
    };
    
    // Función para obtener el formulario para editar un evento
    export const getEditEvent = async (req: Request, res: Response, next: NextFunction) => {
        console.log("getEditEvent: Devolvemos el formulario para editar eventos");
        const editMode = req.query.edit === 'true';
        if (!editMode) {
            return res.redirect('/events');
        }
        const eventId = req.params.eventId;
        const event = await Events.findById(eventId);
        if (event) {
            res.render('admin/edit-event', {
                pageTitle: "Formulario de edición de evento",
                path: "/admin/edit-event",
                editing: editMode,
                event: event
            });
        } else {
            res.redirect('/events');
        }
    };
    
    // Función para editar un evento existente
    export const postEditEvent = async (req: Request, res: Response, next: NextFunction) => {
        const eventId = req.body.eventId;
        const title = req.body.title;
        const description = req.body.description;
        const fecha = req.body.fecha;
      
        const imageURL= req.body.imageURL
        const price = req.body.price
        const events = new Events(title, description, price , imageURL,fecha, eventId);
        await events.save();
        res.redirect('/admin/events');
    };
    
    // Función para eliminar un evento
    export const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
        const eventId = req.body.eventId;
        const deletedEvent = await Events.deleteById(eventId);
        res.redirect('/admin/events');
    };
//export const postDeleteProduct //Controller para elimnar un producto