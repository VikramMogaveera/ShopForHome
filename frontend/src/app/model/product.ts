export class Product {
    constructor(
        public product_id:number,
        public product_name:string,
        public price:number,
        public rating:number,
        public available:number,
        public prod_url:string,
        public category_id?:number
    ){}
}