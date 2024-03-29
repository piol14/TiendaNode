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
     if (id) {
        this._id = new ObjectId(id);
    }
        }
    
    async save(){
        if(this._id){

            const result = await collections.products?.updateOne({_id: this._id}, {$set: this});
            result
            ? console.log(`Producto ${this.title} actualizado`)
            : console.log("Error al actualizar el producto");
        }else {
            const result = await  collections.products?.insertOne(this);
           result 
            ? console.log(`Producto ${this.title} insertado con el id ${result.insertedId}`)
            : console.log("Error al insertar el producto");
            return this;
        }
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
    static async findById(productId: string) {
        return await collections.products?.findOne({ _id: new ObjectId(productId) });
      }

      static async deleteById(productId: string) {
        try {
            const result = await collections.products?.deleteOne({ _id: new ObjectId(productId) });
            if (result && result.deletedCount === 1) {
                console.log(`Producto eliminado exitosamente con ID: ${productId}`);
                return true;
            } else {
                console.log(`No se pudo encontrar el producto con ID: ${productId}`);
                return false;
            }
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            return false;
        }
    }
} 
