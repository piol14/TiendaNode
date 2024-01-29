import { ObjectId } from "mongodb";
import { collections } from "../services/databaseService.js";

 const products: Product[] = [];
    

export class Product {

    public _id?: ObjectId;
    constructor(
        
        public title: string, 
        public imageURL: string, 
        public description: string, 
        public price: number,
        public id? : number) {
     
    }
    async save(){
        if(this._id){

            const result = await collections.products?.updateOne({_id: this._id}, {$set: this});
            result
            ? console.log(`Producto ${this.title} actualizado`)
            : console.log("Error al actualizar el producto");
        }
            const result = await  collections.products?.insertOne(this);
           result 
            ? console.log(`Producto ${this.title} insertado con el id ${result.insertedId}`)
            : console.log("Error al insertar el producto");
            return this;
        
         
       /*  if(!this.id){
            this.id=Math.round(Math.random()*100000000000)
            products.push(this);
        }
        else {
            const index = products.findIndex(p=>p.id===this.id);
            if(this.id>=0){
                products[index]=this;
            }
        } */
    }

    static delete(productId: number): Product | undefined {
        const index = products.findIndex(p => p.id === productId);
        if (index >= 0) {
            return products.splice(index, 1)[0];
        }
        return undefined;
    }
    static async fetchAll(){
        return  await collections.products?.find().toArray();
    }
    static findById(productId: number): Product
    {
        return products.find(p => p.id === productId)!;
    }

static deletebyproductId(productId: number)
{
    console.log('entra en deletebyproductId');
    const index = products.findIndex(p => p.id === productId);
    if (index >= 0) {
       products.splice(index, 1)[0];
    }
    
}
}
