import { Router } from "express";

export const adminRouter = Router();


//todas las rutas que llegan aquí empiezan por /admin

adminRouter.get('/add-product',(req,res,next)=>{
    console.log("Devolvemos el formulario para meter productos");
    
    //res.send('<FORM action="/admin/product" method="POST"> <input type="text" name="producto"> <button type="submit"> Enviar </button> </FORM> ');
    res.render('add-product',{pageTitle: "Formulario", path: "/admin/add-product"});
});

adminRouter.post('/add-product',(req, res, next) => {
    if(req.body.title){
        console.log('Ha llegado el siguiente producto: ',req.body.title);
    }
    res.redirect('/');
});