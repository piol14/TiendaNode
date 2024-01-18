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
        
    }

    static fetchAll(){
        return products;
    }
    static findById(productId: number): Product
    {
        return products.find(p => p.id === productId)!;
    }
}

