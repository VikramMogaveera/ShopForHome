import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../model/cartitem';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {


  cartItems:any[];
  productList = new BehaviorSubject<any>([]);
  constructor() { 
    this.cartItems = [];
  }

  setItems(product:any) {
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  addToCart(item:any) {
    this.cartItems.push(item);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
  }
  getItems() {
    return this.productList.asObservable();
  }

  deleteItem(item:any) {
    this.cartItems.map((a:any ,index:any)=>{
      if(item.product_id === a.product_id) {
        this.cartItems.splice(index,1);
      }
    }) 
    this.productList.next(this.cartItems);
  }

  getTotalPrice():number {
    let total = 0;
    this.cartItems.map((a:Product)=>{
      total +=a.price
    })
    return total;
  }
  removeAll() {
    this.cartItems =[];
    this.productList.next(this.cartItems);
  }
}
