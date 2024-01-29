import { ObjectId } from "mongodb";
import { collections } from "../services/databaseService.js";


interface address{
    calle: string
    telf:string
    CP:string
}
export class User {
    public _id?: ObjectId;
    constructor(

        public DNI:string,
        public name:string,
        public mail:string,
        public contacto:address,
       id?:string
    ) {
        if(id){
            this._id= new ObjectId(id);
        } 
    }

    async save() {
        const result1 = await collections.users?.findOne({DNI:this.DNI});
        if(result1){
            this._id= result1._id;
            return this;
        }
        const result = await collections.users?.insertOne(this);
        console.log(result);
       result 
            ? console.log(`Usuario ${this.name} insertado con el id ${result.insertedId}`)
            : console.log("Error al insertar el usuario");
            return this; 
    }

    static async  fetchById(id:string){

        return await  collections.users?.findOne({_id: new ObjectId(id)});
    }
}

