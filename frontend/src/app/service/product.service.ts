import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  wishList:Product[];
  constructor(private http:HttpClient) { 
    this.wishList = [];
  }

  url:string = "http://localhost:8000/product";
  prod_url:string = "http://localhost:8000/product";

  addToWishlist(product:Product) {
    if(this.wishList.length === 0) {
      this.wishList.push(product);
    }
    else {
    for(var i=0;i<this.wishList.length;i++) {
      if(this.wishList[i] != product) {
        this.wishList.push(product);
      }
    }
  }
    return this.wishList;
  }

  removeFromWishlist(product:Product) {
    this.wishList.map((a:Product,index:number) => {
      if(product.product_id === a.product_id) {
        this.wishList.splice(index,1);
      }
    })
  }


  getAllWishlist() {
    return this.wishList;
  }


  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  /**
   * getting a product by id 
   */
  getById(id:number):Observable<Product> {
    return this.http.get<Product>(`${this.prod_url}/${id}`);
  }
  
}
