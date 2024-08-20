import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { CartitemService } from '../service/cartitem.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total!:number;
  quantity:number = 1;
  products:any[];
  constructor(private ps:ProductService,private route:ActivatedRoute,private cartService:CartitemService,private router:Router) { 
    this.products = [];
  }

  ngOnInit(): void {
  
    this.cartService.getItems().subscribe(res=>{
      this.products = res;
      this.total = this.cartService.getTotalPrice();
    })
    console.log(this.products)
    console.log(this.total)
  }

  removeItem(item:Product) {
    this.cartService.deleteItem(item);
  }

  emptycart() {
    this.cartService.removeAll();
  }
  
  checkout() {
    this.router.navigate(['order']);
  }
}
