
import { ObjectId } from "mongodb";
import { collections } from "../services/databaseService.js";
const events: Events[] = [];



export class Events {

    public _id?: ObjectId;
    constructor(
        
        public title: string, 
        public imageURL: string, 
        public description: string, 
        public price: number,
        public fecha: Date, 
        public id? : number) {
     if (id) {
        this._id = new ObjectId(id);
    }
        }
    
    async save(){
        if(this._id){

            const result = await collections.events?.updateOne({_id: this._id}, {$set: this});
            result
            ? console.log(`Evento ${this.title} actualizado`)
            : console.log("Error al actualizar el evento");
        }else {
            const result = await  collections.events?.insertOne(this);
           result 
            ? console.log(`Evento ${this.title} insertado con el id ${result.insertedId}`)
            : console.log("Error al insertar el evento");
            return this;
        }
    }
         

        
 

    static delete(eventId: number): Events | undefined {
        const index = events.findIndex(p => p.id === eventId);
        if (index >= 0) {
            return events.splice(index, 1)[0];
        }
        return undefined;
    }
    static async fetchAll(){
        return  await collections.events?.find().toArray();
    }
    static async findById(productId: string) {
        return await collections.events?.findOne({ _id: new ObjectId(productId) });
      }

      static async deleteById(productId: string) {
        try {
            const result = await collections.events?.deleteOne({ _id: new ObjectId(productId) });
            if (result && result.deletedCount === 1) {
                console.log(`Evento eliminado exitosamente con ID: ${productId}`);
                return true;
            } else {
                console.log(`No se pudo encontrar el evento con ID: ${productId}`);
                return false;
            }
        } catch (error) {
            console.error("Error al eliminar el evento:", error);
            return false;
        }
    }
} 
