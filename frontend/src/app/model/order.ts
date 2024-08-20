export class Order {
    constructor(
        public id:number,
        public order_date:Date,
        public delivery_date:Date,
        public address:string,
        public email:string
    ){}
}