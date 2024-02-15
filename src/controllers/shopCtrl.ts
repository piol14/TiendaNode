import { NextFunction, Request, Response } from "express";
import { Product } from "../models/Product.js";
import { User } from "../models/User.js";

export const getIndex = (req: Request, res: Response, next: NextFunction) => {  
    res.status(200).json({ pageTitle: 'Tienda', path: '/' });
};

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {  
    const products = await Product.fetchAll();
    res.status(200).json({ message: "Success", products: products });
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => { 
    const productId = req.params.productId; 
    const product = await Product.findById(productId);
    if (product) {
        res.status(200).json({ message: "Success", product: product });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

export const getCart = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    console.log(user);
    const items = await user.getCart();
    console.log(items);
    res.status(200).json({ message: "Success", cartItems: items });
};

export const postCart = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    const productId = req.body.productId;
    await user.addToCart(productId);
    res.status(200).json({ message: "Product added to cart" });
};

export const deleteCartItem = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    const productId = req.body.productId;
    await user.deleteCartItem(productId);
    res.status(200).json({ message: "Product removed from cart" });
};

export const postCartIncreaseItem = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    const productId = req.body.productId;
    await user.addToCart(productId);
    res.status(200).json({ message: "Product quantity increased" });
};

export const postCartDecreaseItem = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    const productId = req.body.productId;
    await user.decreaseCartItem(productId);
    res.status(200).json({ message: "Product quantity decreased" });
};

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    const orders = await user.getOrders();
    res.status(200).json({ message: "Success", orders: orders });
};

export const getCheckOut = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body.user as User;
    await user.addOrder();
    res.status(200).json({ message: "Order placed successfully" });
};
