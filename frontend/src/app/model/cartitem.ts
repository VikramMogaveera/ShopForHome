import { Customer } from "./customer";
import { Product } from "./product";

export class CartItem{
    constructor(
        public id:number,
        public cust_email:Customer,
        public product_id:Product,
        public quantity:number
    ){}
}