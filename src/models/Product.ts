 const products: Product[] = [];
    

export class Product {

    
    constructor(
        public title: string, 
        public imageURL: string, 
        public description: string, 
        public price: number,
        public id? : number) {
     
    }
    save(){
        if(!this.id){
            this.id=Math.round(Math.random()*100000000000)
            products.push(this);
        }
        else {
            const index = products.findIndex(p=>p.id===this.id);
            if(this.id>=0){
                products[index]=this;
            }
        }
    }

    static delete(productId: number): Product | undefined {
        const index = products.findIndex(p => p.id === productId);
        if (index >= 0) {
            return products.splice(index, 1)[0];
        }
        return undefined;
    }
    static fetchAll(){
        return products;
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
